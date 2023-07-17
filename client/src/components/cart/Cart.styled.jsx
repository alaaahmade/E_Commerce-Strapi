import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
  position: 'absolute',
  top: '80px',
  right: '20px',
  zIndex: '200',
  backgroundColor: '#fff',
  WebkitBoxShadow: '0 0 7px -5px rgba(0, 0, 0, 0.5)',
  boxShadow: '0 0 7px -5px rgba(0, 0, 0, 0.5)'
})

export const CartItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

export const TotalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 500,
  fontsize: '18px',
  
})