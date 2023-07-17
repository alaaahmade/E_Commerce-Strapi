import {Box} from '@mui/material'
import List from './List'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { FilterItem, HeaderTow, InputItem, InputLabel } from './Products.styled'
import { useFetch } from '../../hooks/useFetch'

const Products = () => {
  const [maxPrise, setMaxPrise] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [subCat, setSubCat] = useState([]);
  const { id } = useParams();

  const handleSort = (e) => setSort(e.target.value)

  const {data} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${+id}`);


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSubCat(isChecked ? [...subCat, value] : subCat.filter(item => item !== value))
  }

  return (
    <Box sx={{
      p: '30px 50px',
      display: 'flex',
      width: '100vw'
    }}>
      <Box sx={{
        flex: 1,
        position: 'sticky',
        height: '100%',
        top: '50px'
      }}>
        <FilterItem >
          <HeaderTow>Product Categories</HeaderTow>
        {data.length && data?.map(item => <InputItem key={item.id} onChange={handleChange}>
            <input type="checkbox" id={item.id} value={item.id}/>
            <InputLabel htmlFor={item.id}>{item.attributes.title}</InputLabel>
          </InputItem>) }

        </FilterItem>
        <FilterItem >
          <HeaderTow>Filter by Price</HeaderTow>
          <InputItem>
            <span>0</span>
            <input type="range" id='4' min={1} max={1000} value={maxPrise} onChange={(e) => setMaxPrise(e.target.value)}/>
            <span>{maxPrise}</span>
          </InputItem>
        </FilterItem>
        <FilterItem >
          <HeaderTow>Sort by</HeaderTow>
          <InputItem>
            <input type="radio" id='asc' value='asc' name='price' checked={sort === 'asc'} onChange={handleSort}/>
            <InputLabel htmlFor='asc'>Price (Lowest First)</InputLabel>
          </InputItem>
          <InputItem>
            <input type="radio" id='desc' value='desc' name='price' onChange={handleSort}/>
            <InputLabel htmlFor='desc'>Price (Highest First)</InputLabel>
          </InputItem>
        </FilterItem>
      </Box>
      <Box sx={{
        flex: 4,
        width: '100%'
      }} className='right'>
        <img style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          marginBottom: '50px',
        }} src="https://img.freepik.com/premium-photo/feeling-bored-attractive-young-woman-hat-coat-making-face-looking-away-while-spending-time-city_425904-13690.jpg?size=626&ext=jpg" alt="Cat-image" />
        <List catId={id} maxPrise={maxPrise} sort={sort} subCat={subCat}/>
      </Box>
    </Box>
  )
}

export default Products