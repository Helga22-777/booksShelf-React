import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa"
import "./BookList.css"
import { toggleFavorite } from "../../store/booksSlice"


const BookItem = (book) => {

  const dispatch = useDispatch()
  const addToFavorite = () => {
    dispatch(toggleFavorite(book)); 
  }
   return(
    <div className="book-item flex flex-column flex-sb">
      <Link to={`/book/${book.id}`}>
       <img src={book.cover_image} alt={book.title} />
      </Link>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`}>
          <h2 className="title fw-7 fs-18">{book.title}</h2>
        </Link>
        <p className="text-capitalize">
          <span className="fw-6">Author:</span> {book.author}
        </p>
        <p>
          <span className="fw-6">Category:</span> {book.category}, {book.published}
          <br />
          { book.page_count > 0 && (
            <>
            <span className="fw-6">Pages:</span> {book.page_count}
            </>
          )}
        </p>
      </div>
      <FaHeart onClick={addToFavorite} className={book.favorite ? "heart-active" : "heart"} title={book.favorite ? "Delete from favorite?" : "Add to favorite?"} />
  </div>
  )
}
export default BookItem