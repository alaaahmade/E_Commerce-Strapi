import { Box } from '@mui/material'
import { 
    Search,
    PersonOutline,
    FavoriteBorderOutlined,
    ShoppingCartOutlined } from '@mui/icons-material';
import { CustomLink, Item } from './Nav.Styled';
import { useState } from 'react';
import Cart from '../cart/Cart';
import {useSelector} from 'react-redux';


const Right = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector(state => state.cart.products)

  return (
    <Box sx={{
      display: 'flex',
      gap: '25px',
      alignItems: 'center'
    }}>
      <Item>
        <CustomLink to='/'>Homepage</CustomLink>
      </Item>
      <Item>
        <CustomLink to='/'>About</CustomLink>
      </Item>
      <Item>
        <CustomLink to='/'>Contact</CustomLink>
      </Item>
      <Item>
        <CustomLink to='/'>Stores</CustomLink>
      </Item>
      <Box sx={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#777'
      }}>
        <Search/>
        <PersonOutline/>
        <FavoriteBorderOutlined/>
        <Box sx={{
          position: 'relative',

        }}
        onClick={() => setOpen(!open)}>
        <ShoppingCartOutlined/>
        <span style={{
          fontSize: '12px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#2879fe',
          color: '#fff',
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} >{products.length}</span>
        </Box>
      </Box>
      {open && <Cart/>}
    </Box>
  )
}

export default Right