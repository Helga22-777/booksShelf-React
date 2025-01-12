import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export const Home = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}