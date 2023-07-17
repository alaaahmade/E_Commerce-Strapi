import { Box, styled } from '@mui/material';

export const Image = styled('img')({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  cursor: 'pointer',
  marginBottom: '10px'
})

export const QButton = styled('button')({
  width: '50px',
  height: '50px',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
})

export const AddButton = styled('button')({
  width:'250px',
  padding: '10px',
  backgroundColor: '#2879fe',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  cursor: 'pointer',
  border: 'none',
  fontWeight: 500
})

export const Item = styled(Box)({
  display:'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#2879fe',
  fontsize: '14px',

})

export const Info = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  color: 'gray',
  fontsize: '14px',
}) 

export const HR = styled('hr')({
  width: '200px',
  border: '1px solid rgb(238, 237, 237)'
})