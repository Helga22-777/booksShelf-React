import loader from "../../images/loader.svg"
import "./Loader.css"


const Loader = () => {
  return(
    <div className="loader flex flex-c">
      <img src={loader}  alt="loader"/>
    </div>
  )
}

export default Loader;