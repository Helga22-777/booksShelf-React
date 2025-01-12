import { createBrowserRouter } from 'react-router-dom'
import FreeEbooks from './pages/FreeEbooks/FreeEbooks.jsx'
import BookShelf from './pages/BookShelf/BookShelf.jsx'
import { Home } from './pages/Home/Home.jsx'
import BooksList from './components/BookList/BookList.jsx'
import { BookDetails } from './components/BookDetails/BookDetails.jsx'
import About from './components/About/About.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    
    children: [
      {
        path: '/free',
        element: <FreeEbooks />,
      },
     {
        path: '/booklist',
        element: <BooksList />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />
      },
     ]
   },
   {
    path: '/bookshelf',
    element: <BookShelf />
   },
   {
    path: '/about',
    element: <About />
   }
])