import React, { useEffect } from 'react';
import { fetchBooks } from '../../store/booksSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import BookItem from './BookItem';
import "./BookList.css";

const BooksList = () => {
  
  const dispatch = useDispatch();
  const  books = useSelector(state => state.books.books);
  const  {status, error} = useSelector(state => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  },[dispatch])

  if (status === "loading") {
    return <Loader />
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

export default BooksList;
