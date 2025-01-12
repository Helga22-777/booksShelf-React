import Navbar from "../Navbar/Navbar";
import Filter from "../Filter/Filter";
import SearchFrom from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  
  return(
    <div className="holder">
      <header className="header">
        <Navbar />
        <Filter  />
        <div className="header-content">
          <div className="flex flex-column flex-c text-center text-white">
          <h2 className="header-title text-capitalize">somewhere in here is your favorite book.</h2> <br />
          <p className="header-text fs-18 fw-3">Books on the shelf. Add your favorite guts to your favorites.</p>
          <SearchFrom />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header