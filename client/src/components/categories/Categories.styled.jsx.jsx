import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Column = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const Row = styled(Box)({
  flex: 1,
  display: 'flex',
  gap: '10px',
  overflow: 'hidden'
})

export const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const CatButton = styled('button')({
  position: 'absolute',
  minWidth: '100px',
  height: '50px',
  padding: '10px',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  margin: 'auto',
  zIndex: '6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  border: 'none',
  textTransform: 'uppercase',
  backgroundColor: '#fff',
  fontWeight: 500,
  cursor: 'pointer'
})

export const CatLink = styled(Link)({
  textDecoration: 'none',
  color: '#000'
})