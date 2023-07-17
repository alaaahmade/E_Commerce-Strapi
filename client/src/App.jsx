import {Box} from '@mui/material'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import RootLayout from './layouts/RootLayout'
import './app.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  },

])

const  App = () => {

  return (
<Box>
  <RouterProvider router={router} />
</Box>
  )
}

export default App
