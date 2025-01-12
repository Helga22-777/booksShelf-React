import { Link } from "react-router-dom"
import { RiMenu4Fill } from "react-icons/ri";
import  logoImg  from "../../images/pngwing.com.png"
import lottie from "lottie-web";
import animationData from "../../images/animation/Animation - 1730665213979.json"
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleNavbar = () => setToggleMenu(!toggleMenu)
  const closeNavLink = () => setToggleMenu(false)

  useEffect (() => {
    lottie.loadAnimation({
      container: document.getElementById('animationContainer2'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
   },[]) 

  return(
    <nav className='navbar' id = "navbar">
       <div className='container navbar-content flex'>
          <div className='brand-and-toggler flex flex-sb'>
            <Link to = "/bookshelf" className='navbar-brand flex'>
              <img src = {logoImg} alt = "logo" />
              <span className='text-uppercase fw-7 fs-24 ls-1'>My own bookshelf</span>
            </Link>
            <div id="animationContainer2" style={{ width: '100px', height: '100px' }}></div>
            <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
              <RiMenu4Fill size = {35} style = {{
                color: `${toggleMenu ? "#fff" : "#010101"}`
              }} />
            </button>
          </div>
        <div onMouseLeave={closeNavLink} className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/booklist" className={`nav-link ${window.innerWidth < 992 ? 'text-white' : ''} fs-22 fw-6 ls-1`}>Books</Link></li>
            <li className="nav-item"><Link to="/free" className={`nav-link ${window.innerWidth < 992 ? 'text-white' : ''} fs-22 fw-6 ls-1`}>Free Ebooks</Link></li>
            <li className="nav-item"><Link to="/bookshelf" className={`nav-link ${window.innerWidth < 992 ? 'text-white' : ''} fs-22 fw-6 ls-1`}>My Books</Link></li>
            <li className="nav-item"><Link to="/about" className={`nav-link ${window.innerWidth < 992 ? 'text-white' : ''} fs-22 fw-6 ls-1`}>About</Link></li>
          </ul>
        </div>
       </div>
    </nav>
  )
}

export default Navbar