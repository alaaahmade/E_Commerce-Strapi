import {Box} from '@mui/material'
import { useEffect, useState } from 'react'
import { AddButton, HR, Image, Info, Item, QButton } from './Product.styled';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import {useFetch} from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/cartReducer'
const process = import.meta.env


const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch()

  const {id} = useParams()

  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);
  useEffect(() => {
    setImages([
      data.attributes && process.VITE_REACT_APP_UPLOAD_URL+data.attributes.img?.data.attributes.url,
      data.attributes && process.VITE_REACT_APP_UPLOAD_URL+data.attributes.img2?.data.attributes.url
    ])
  }, [data])

  return (
    <Box sx={{
      padding: '20px 50px',
      display:'flex',
      gap: '50px',
    }}>
      { error ? 'something went Wrong!' :
        loading ? 'loading...' :     <>

        <Box sx={{
            flex: 1,
            display: 'flex',
            gap: '20px',
          }} className="left">
            <Box sx={{
              flex: 1,
          }} className="images">
              <Image src={images[0]} alt="" onClick={() => setCurrentImage(0)}/>
              <Image src={images[1]} alt="" onClick={() => setCurrentImage(1)} />
            </Box>
            <Box sx={{
              flex: 5,  
          }} className="mainImage">
              <img style={{
                width: '100%',
                maxHeight: '800px',
                minHeight: '600px',
                objectFit: 'cover',
              }} src={images[currentImage]} alt="" />
            </Box>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }} className="right">
            <h1>Title</h1>
            <span style={{
              fontSize: '30px',
              color: '#2879fe',
              fontWeight: 500,
            }}>$199</span>
            <p style={{
              fontSize: '18px',
              fontWeight: 300,
              textAlign: 'justify',
    
            }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Recusandae unde nihil veniam repudiandae,
              totam aspernatur. Atque itaque cupiditate, similique, quis accusantium,
              dolor officiis in eveniet neque pariatur. Ad, quis.</p>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
    
              }} className="quantity">
                <QButton onClick={() => setQuantity(prev => prev=== 1 ? 1 : prev-1)}>-</QButton>
                {quantity}
                <QButton onClick={() => setQuantity(prev => prev+1)}>+</QButton>
              </Box>
              <AddButton className='add' onClick={() => dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                price: data.attributes.price,
                description: data.attributes.description,
                img: data.attributes.img.data.attributes.url,
                quantity
              }))}>
                <AddShoppingCartIcon/>
                Add To Cart
              </AddButton>
              <Box sx={{
                display: 'flex',
                gap: '20px',
    
              }} className="links">
              <Item>
                <FavoriteBorderIcon/>
              </Item>
              <Item>
                <BalanceIcon/>
              </Item>
              </Box>
              <Info sx={{
                mt: '30px',
              }}>
                <span>Vender: Polo</span>
                <span>Product Type: T_Shirt</span>
                <span>Tag: T_shirt, Women, Top</span>
              </Info>
              <HR sx={{
                width: '100%',
              }}/>
              <Info>
                <span>DESCRIPTION</span>
                <HR/>
                <span>ADDITIONAL INFORMATION</span>
                <HR/>
                <span>FAQ</span>
              </Info>
          </Box>
        </>
      }
    </Box>
  )
}

export default Product