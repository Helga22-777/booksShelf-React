import { FcSearch } from "react-icons/fc";
import { fetchFilterBooks } from "../../store/booksSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./SearchForm.css";

const SearchFrom = () => {

  const dispatch = useDispatch();
  const inpRef = useRef(); 

  const handler = (e) => {
      e.preventDefault();
      dispatch(fetchFilterBooks(inpRef.current.value));
      inpRef.current.value = '';

  };

  const handlerEnter = (e) => {
    if (e.key === 'Enter') {
       handler(e);
    }    
  }
  return (
    <form className="search form-control flex flex-sa bg-white filter-form-element">
      <FcSearch onClick={handler} />
      <input ref={inpRef} placeholder="search..." type="text" onKeyDown={handlerEnter}  />
    </form> 
  )
}

export default SearchFrom;