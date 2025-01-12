import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { fetchFreeBooks } from "../../store/booksSlice";
import BookItem from "../../components/BookList/BookItem";
import { useEffect } from "react";

const FreeEbooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books); 
  const { status, error } = useSelector(state => state.books);

  useEffect(() => {
    dispatch(fetchFreeBooks());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }
  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className='booklist-content grid'>
      {books.map((book) => ( 
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default FreeEbooks;