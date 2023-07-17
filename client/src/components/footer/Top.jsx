import { Box } from '@mui/material'
import { Item } from '../navBar/Nav.Styled'

const Top = () => {
  return (
    <Box sx={{
      display: 'flex',
      gap: '50px',
      color: 'gray',
    }}>
      <Item sx={{
        flexDirection: 'column',
        flex:'1',
        gap:'10px',
        fontSize: '14px',
        alignItems: 'flex-start',
      }}>
        <h1 style={{
          marginBottom: '0',
          fontSize: '18px',
          fontWeight: 500,
          color:'#555',
        }}>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </Item>
      <Item sx={{
        flex:'1',
        flexDirection: 'column',
        gap:'10px',
        alignItems: 'flex-start',
        fontSize: '14px',
      }}>
        <h1 style={{
          marginBottom: '0',
          fontSize: '18px',
          fontWeight: 500,
          color:'#555',
        }}>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>        
      </Item>
      <Item sx={{
        flex:'1',
        flexDirection: 'column',
        gap:'10px',
        alignItems: 'flex-start',
        textAlign: 'justify',
        fontSize: '14px',
      }}>
        <h1 style={{
          marginBottom: '0',
          fontSize: '18px',
          fontWeight: 500,
          color:'#555',
        }}>About</h1>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae, voluptate beatae iure pariatur eius debitis modi iusto,
        fuga suscipit aliquid architecto repudiandae maiores odio 
        ipsa saepe enim .
        </span>
      </Item>
      <Item sx={{
        flex:'1',
        flexDirection: 'column',
        gap:'10px',
        alignItems: 'flex-start',
        textAlign: 'justify',
        fontSize: '14px',
      }}>
        <h1 style={{
          marginBottom: '0',
          fontSize: '18px',
          fontWeight: 500,
          color:'#555',
        }}>Contact</h1>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae, voluptate beatae iure pariatur eius debitis modi iusto,
        fuga suscipit aliquid architecto repudiandae maiores odio 
        ipsa saepe enim .
        </span>
      </Item>
    </Box>
  )
}

export default Top