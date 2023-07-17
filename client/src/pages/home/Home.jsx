import { Box } from '@mui/material'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetCart } from '../../redux/cartReducer'

const Home = () => {

  const {search} = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    search.endsWith(true) && dispatch(resetCart()) && navigate('/')

  }, []) 
  return (
    <Box sx={{
      overflow: 'hidden'
    }}>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
      <Contact/>
    </Box>
  )
}

export default Home