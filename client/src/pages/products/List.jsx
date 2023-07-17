import { Box } from '@mui/material'
import Card from '../../components/card/Card'
import { useFetch } from '../../hooks/useFetch';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const List = ({subCat, sort, maxPrise, catId}) => {
  const [products, setProducts] = useState([]);

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
    (item) => `&[filters][sub_category][id][$in][${item}]=${item}`).join('')}
    &[filters][price][$lte]=${maxPrise}&sort=price:${sort}
    `);

    useEffect(() => {
      setProducts(data);

    }, [data, subCat])

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {error ? 'something went Wrong!' : loading ? 'Loading...' : products.length > 0 &&products?.map(item => <Card key={item.id} item={item} />)}
    </Box>
  )
}

List.propTypes = {
  subCat: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  maxPrise: PropTypes.number.isRequired,
  catId: PropTypes.string.isRequired,
};


export default List