import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBookById,
  getBooks,
  getFilterBooks,
  getFreeBooks,
} from "../constants/api_url";
import notFound from "../images/images-cover.png";

const formattedBooks = (data, favoriteBooks) => {
  return data.items.map((item) => {
    const isFavorite = favoriteBooks.some((favBook) => favBook.id === item.id);
    return {
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors
        ? item.volumeInfo.authors.join(", ")
        : "Unknown",
      cover_image: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : notFound,
      category: item.volumeInfo.categories
        ? item.volumeInfo.categories.join(", ")
        : "Other",
      page_count: item.volumeInfo.pageCount,
      published: item.volumeInfo.publishedDate,
      favorite: isFavorite || false,
    };
  });
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async function (_, { getState, rejectWithValue }) {
    try {
      const response = await getBooks();
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      const favoriteBooks = getState().books.favoriteBooks;
      return formattedBooks(data, favoriteBooks);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchFilterBooks = createAsyncThunk(
  "books/fetchFilterBooks",
  async function (params, { getState, rejectWithValue }) {
    try {
      const response = await getFilterBooks(params);
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      const favoriteBooks = getState().books.favoriteBooks;
      return formattedBooks(data, favoriteBooks);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFreeBooks = createAsyncThunk(
  "books/fetchFreeBooks",
  async function (_, { getState, rejectWithValue }) {
    try {
      const response = await getFreeBooks();
      if (!response.ok) {
        throw new Error(
          `Server Error!${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      const favoriteBooks = getState().books.favoriteBooks;
      return formattedBooks(data, favoriteBooks);
    } catch (error) {
      console.error("Error fetching free books:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async function (id, { getState, rejectWithValue }) {
    try {
      const response = await getBookById(id);
      if (!response.ok) {
        throw new Error("Book not found...");
      }
      const item = await response.json();
      const favoriteBooks = getState().books.favoriteBooks;
      const isFavorite = favoriteBooks.find((book) => book.id === item.id);

      return {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown",
        cover_image: item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : notFound,
        category: item.volumeInfo.categories
          ? item.volumeInfo.categories.join(", ")
          : "Other",
        page_count: item.volumeInfo.pageCount || "---",
        previewLink: item.volumeInfo.previewLink
          ? item.volumeInfo.previewLink
          : "",
        published: item.volumeInfo.publishedDate || "---",
        description: item.volumeInfo.description || "will be soon...",
        favorite: isFavorite || false,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const BooksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    book: null,
    favoriteBooks: [],
    status: null,
    error: null,
  },
  reducers: {
    toggleFavorite(state, action) {
      const isFav = state.favoriteBooks.find(
        (book) => book.id === action.payload.id
      );

      const toggleBook = state.books.find(
        (book) => book.id === action.payload.id
      );
      if (state.book && state.book.id === action.payload.id) {
        state.book.favorite = !state.book.favorite;
      }
      if (!isFav) {
        state.favoriteBooks.push({
          ...action.payload,
          favorite: true,
        });
        if (toggleBook) {
          toggleBook.favorite = true;
        }
      } else {
        state.favoriteBooks = state.favoriteBooks.filter(
          (book) => book.id !== action.payload.id
        );
        state.books = state.books.filter(
          (book) => book.id !== action.payload.id
        );
      }
    },
    clearBook(state) {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFreeBooks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBookById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFilterBooks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "resolved";
        state.books = action.payload;
      })
      .addCase(fetchFreeBooks.fulfilled, (state, action) => {
        state.status = "resolved";
        state.books = action.payload;
        console.log(state.freeBooks);
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.status = "resolved";
        state.book = action.payload;
      })
      .addCase(fetchFilterBooks.fulfilled, (state, action) => {
        state.status = "resolved";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, setError)
      .addCase(fetchFreeBooks.rejected, setError)
      .addCase(fetchBookById.rejected, setError)
      .addCase(fetchFilterBooks.rejected, setError);
  },
});

export const { toggleFavorite, clearBook } = BooksSlice.actions;

export default BooksSlice.reducer;
