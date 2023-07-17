/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
const process = import.meta.env

const Card = ({item}) => {
  const [index, setIndex] = useState(1)

  const setHover = () => {
    setIndex(0)
  }

  const removeHover = () => {
    setIndex(1)
  }

  return (
    <Link style={{
      color: '#000',
      textDecoration: 'none',
    }} to={`/product/${item.id}`}>
      <Box sx={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        mb: '50px'
      }}>
        <Box sx={{
          width: '100%',
          height: '280px',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={setHover}
        onMouseLeave={removeHover}
        >
          {item.attributes.isNew && <span style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            backgroundColor: '#fff',
            color: 'teal',
            padding: '3px 5px',
            zIndex: 2,
            fontWeight: 500,
            fontSize: '12px'
          }}>New Season</span>}
          <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: index,
          }} src={process.VITE_REACT_APP_UPLOAD_URL+item.attributes?.img?.data.attributes.url} alt="image1" />
          <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute'
          }}src={process.VITE_REACT_APP_UPLOAD_URL+item.attributes?.img2?.data.attributes.url} alt="image2" />
        </Box>
        <h2 style={{
          fontSize: '16px',
          fontWeight: 400
        }}>{item.attributes.title}</h2>
        <Box sx={{
          display: 'flex',
          gap: '20px'
        }} className="price">
          <h3 style={{
            fontSize: '18px',
            fontWeight: 500,
            color: 'gray',
            textDecoration: 'line-through'
          }}>${item.attributes.oldPrice || item.attributes.price + 20}</h3>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 500
          }}>${item.attributes.price}</h3>
        </Box>
      </Box>
    </Link>

  )
}

export default Card