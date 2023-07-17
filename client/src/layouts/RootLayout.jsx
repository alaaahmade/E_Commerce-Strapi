import { Box } from '@mui/material'
import NavBar from '../components/navBar/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <Box>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </Box>
  )
}

export default RootLayout