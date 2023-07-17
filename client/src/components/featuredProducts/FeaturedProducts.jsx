import { Box } from '@mui/material'
import Card from '../card/Card'
import { useFetch } from '../../hooks/useFetch'

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({type}) => {

  const {data, error, loading} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  

  return (
    <Box sx={{
      m: '100px 200px',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: "50px"
      }}>
        <h1 style={{
          flex: 2,
          textTransform: 'capitalize',
        }}>{type} products</h1>
        <p style={{
          flex: 3,
          color: 'grey',
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet 
          provident dolore officiis facere a nemo, expedita ratione nobis 
          saepe fuga minus eveniet delectus ipsa numquam, in laudantium atque 
          doloremque autem.saepe fuga minus eveniet delectus ipsa numquam, in 
          laudantium atque doloremque autem.
        </p>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
      }}>
        {error ? 'something went Wrong!' : loading ? 'Loading...' : data.length > 0 && data.map(item => <Card key={item.id} item={item} />)}
      </Box>
    </Box>
  )
}

export default FeaturedProducts