import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Item = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
})

export const CustomLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none'

})