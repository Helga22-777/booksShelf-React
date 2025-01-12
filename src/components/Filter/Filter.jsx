import { FaFilter } from "react-icons/fa";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { fetchFilterBooks } from "../../store/booksSlice";

// const SearchForm = () => {
//  const search = useSelector(state => state.books.search)
//  const dispatch =  useDispatch()

//  const handler = (e) => {
//     console.log(search);
    
//   dispatch(findBooks(e.target.value)) //todo search by lirary
//  }
//   return(
//     <div className="search-form">
//        <form className="search-form">
//           <div className="search-form-element flex flex-sb bg-white">
//             <input onChange={e => handler(e)} type="text" className="form-control" placeholder="find all..."/>
//             <button type="submit"  className='flex flex-c'> <FcSearch size={32}/></button>
//           </div>
//        </form>
//     </div>
//   )
// }

const Filter = () => {
  const dispatch =  useDispatch()
 
  const handler = (e) => {
    dispatch(fetchFilterBooks(e.target.value));
  }
   return(
     <div className="filter-form">
        <form className="form-control flex flex-sa bg-white filter-form-element">
             <label htmlFor="select">Sort By:</label>
             <select id="select" defaultValue="all" onChange={e => handler(e)}>
              <option value="all">All books</option>
              <option value="time&printType=magazines">Magazines</option>
              <option value="time&printType=books">Books</option>
              <option value="orderBy=newest:">Newest</option>
              <option value="ebooks">Ebooks</option>
             </select>
        </form>
     </div>
   )
 }
export default Filter