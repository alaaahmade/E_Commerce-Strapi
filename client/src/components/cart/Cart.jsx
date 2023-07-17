import {Box} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartItem, Container, TotalBox } from './Cart.styled';
import { AddButton } from '../../pages/product/Product.styled';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../../Requst'

const process = import.meta.env


const Cart = () => {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0
    products.forEach(product => (total+=(product.price*product.price)));
    return total.toFixed(2)
  }
  const stripePromise = loadStripe('pk_test_51NUuseLjCbI3t6eLRlsu7LsIal4tXsUa2QEfS2D1f2ofkZpGxxMlOvKVH2vGRuhjNYAfI4bNLkSYDYw2tPYlOhLx004AsPPXDm');
  const handlePayment =async () => {
    try {
      const stripe = await stripePromise;
      const response = await makeRequest.post('/orders', {
        products
      })
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container sx={{
      p: '20px',
    }}>
      <h1 style={{
        marginBottom: '30px',
        color: 'gray',
        fontWeight: 400,
        fontSize: '24px',
      }}>Products in your cart</h1>
      {products?.map(item => <CartItem sx={{
          mb: '30px',
      }} key={item.id}>
        <img style={{
          width: '80px',
          height: '100px',
          objectFit: 'cover'
        }} src={process.VITE_REACT_APP_UPLOAD_URL+item.img} alt="" />
        <Box className="details">
          <h1 style={{
            fontSize:'18px',
            fontWeight: 500
          }}>{item.title}</h1>
          <p style={{
            color: 'gray',
            marginBottom: '10px',
            fontSize: '14px',
          }}>{item.description.substring(0,100)}</p>
          <Box sx={{
            color: '#2879fe'
          }}>{item.quantity} x ${item.price}</Box>
        </Box>
      <DeleteOutlineIcon
      onClick={() => dispatch(removeItem(item.id))}
      sx={{
        color: 'red',
        fontSize: '30px',
        cursor: 'pointer',
      }} />
      </CartItem>)}
      <TotalBox sx={{
        mb: '20px',
      }}>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </TotalBox>
      <AddButton sx={{
        marginBottom: '5px'
      }}
      onClick={handlePayment}
      >RECORD TO CHECKOUT</AddButton>
      <span style={{
        color: 'red',
        fontSize: '12px',
        cursor: 'pointer',
      }}
      onClick={() => dispatch(resetCart())}
      >Reset Cart</span>
    </Container>
  )
}

export default Cart