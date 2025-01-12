import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clearBook, fetchBookById, toggleFavorite } from "../../store/booksSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./BookDetails.css";
import { FaHeart } from "react-icons/fa";

export const BookDetails = () => {
  const { id } = useParams()
  const{ book, status, error }= useSelector(state => state.books)
  const dispatch = useDispatch()
 
  useEffect(() => {
      dispatch(clearBook());
      dispatch(fetchBookById(id))
  }, [dispatch, id])
 

  const addToFavorite = () => {    
    if(book) {
      dispatch(toggleFavorite(book));
    }
  }
 
  if (status === "loading" || !book) {
    return <Loader />
  }
  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return(
    <div className="book-item-details flex-s">
      <div className="img-details">
       <img  src={book.cover_image} alt={book.title} />
      </div>
      
      <div className="book-item-info">
        <div className="text-capitalize">
          <h2 className="title fw-7 fs-18">{book.title}</h2>
          <span className="fw-7 fs-18">{book.author} ({book.published})</span> 
        </div>
        <div>
          <span className="fw-6">{book.category}</span><br />
          <div dangerouslySetInnerHTML={{__html: book.description}} />
        </div>
        <div className="flex">
          <Link to="/booklist">
            <div className="back text-center text-capitalize fs-18"> Back to Library</div>
          </Link>
          <div className="buy text-center text-capitalize fs-18">
            <a href= {book.previewLink} target="_blanc">Here site with book</a>
          </div>
          <FaHeart onClick={addToFavorite} className={book.favorite ? "heart-active" : "heart"} title={book.favorite ? "Delete from favorite?" : "Add to favorite?"} />
        </div>
      </div>      
    </div>
  )
}