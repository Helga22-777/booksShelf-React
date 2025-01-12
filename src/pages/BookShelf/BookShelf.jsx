import { useSelector } from "react-redux";
import lottie from "lottie-web";
import animationData from "../../images/animation/Animation - 1730662574908.json"
import BookItem from "../../components/BookList/BookItem";
import Navbar from "../../components/Navbar/Navbar";
import "./BookShelf.css";
import { useEffect } from "react";

const BookShelf = () => {
   const favBooks  = useSelector(state => state.books.favoriteBooks);

   useEffect (() => {
    lottie.loadAnimation({
      container: document.getElementById('animationContainer'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
   }) 
  
  return (
    <div >
       <Navbar />
       {
       favBooks.length ?
        <div className='booklist-content grid shelf'>
          {favBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
        : (<div className="empty fw-6 fs-22 text-capitalize text-italic">You have not added any books yet
          <div id="animationContainer"></div>
        </div>)
      }
    </div>
  )
}

export default BookShelf;