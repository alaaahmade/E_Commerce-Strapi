import {Box} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';


const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? 2 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === 2 ? 0 : current + 1)
  }

  return (
    <Box sx={{
      height: 'calc(100vh - 80px)',
      width: '100vw',
      position: 'relative'
    }}>
      <Box sx={{
        width:'300vw',
        display: 'flex',
        overflowY: 'hidden',
        height: '100%',
        translate: (`-${current * 100}vw`),
        transition: 'all 1s ease'
      }}>

        <img style={{width: '100vw', height: '100%', objectFit: 'cover'}} src={data[0]}/>
        <img style={{width: '100vw', height: '100%', objectFit: 'cover'}} src={data[1]}/>
        <img style={{width: '100vw', height: '100%', objectFit: 'cover'}} src={data[2]}/>
      </Box>
 
      <Box sx={{
        position: 'absolute',
        left: '50%',
        bottom: '40px',
        margin: 'auto',
        width: 'fit_content',
        display: 'flex',
        gap: '20px',
        translate: ('-50%'),
      }}>
        <Box sx={{
          width:'50px',
          height: '50px',
          border: '1px solid #999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} 
        onClick={prevSlide}
        >
        <ArrowBackIcon/>
        </Box>
        <Box sx={{
          width:'50px',
          height: '50px',
          border: '1px solid #999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        onClick={nextSlide}
        >
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Slider