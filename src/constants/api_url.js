import { API_KEY } from "./api_key";

const lang = "langRestrict=en";
export const URL = "https://www.googleapis.com/books/v1/volumes";

export const getBooks = () =>
  fetch(`${URL}?q=all&${lang}&maxResults=40&key=${API_KEY}`);

export const getFreeBooks = () =>
  fetch(
    `${URL}?q=free+ebooks&filter=free-ebooks&${lang}&maxResults=40&key=${API_KEY}`
  );

export const getBookById = (id) => fetch(`${URL}/${id}?key=${API_KEY}`);

export const getFilterBooks = (queryParams) =>
  fetch(`${URL}?q=${queryParams}&${lang}&key=${API_KEY}`);
