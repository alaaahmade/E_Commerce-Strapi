import { Box } from '@mui/material';
import { CatButton, CatLink, Column, Image, Row } from './Categories.styled.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import { useEffect, useState } from 'react';
const process = import.meta.env

const Categories = () => {

  const [cardsArray, setCardsArray] = useState([])

  const {data} = useFetch('/categories?populate=*')
  console.log(data);

  const buildCards = () => {
    const cardsArray = 
    data.length > 0 && data.map(item => <Row key={item.id} sx={{
        position: 'relative',
              }}>
                <Image src={process.VITE_REACT_APP_UPLOAD_URL+item.attributes.img.data.attributes.url} alt={item.attributes.title}/>
                <CatButton>
                  <CatLink to={`/products/${item.id}`} >{item.attributes.title}</CatLink>
                </CatButton>
              </Row>
)
    setCardsArray(cardsArray);
  }

  useEffect(() => {
    buildCards()
  }, [data])

  return (
    <Box sx={{
      display: 'flex',
      height: '80vh',
      gap: '10px',
      m: '10px',
    }}>
      <Column>
        {cardsArray[0]}
        {cardsArray[1]}

      </Column>
      <Column>
      {cardsArray[2]}

      </Column>
      <Column sx={{
        flex: 2
      }} >
      <Row sx={{
  position: 'relative',
        }}>
      <Column>
      {cardsArray[5]}
          </Column>
      <Column>
      {cardsArray[3]}

      </Column>
      </Row>
      <Row sx={{
  position: 'relative',
        }}>
        <Column>
        {cardsArray[4]}
        </Column></Row>
      
      </Column>
    </Box>
  )
}

export default Categories