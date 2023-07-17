import { Box } from '@mui/material'

const Bottom = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mt: '50px',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',

      }}>
        <span style={{
          color:'#2879fe',
          fontSize: '24px',

        }}>LAMASTORE</span>
        <span style={{
          marginLeft: '20px',
          fontSize: '12px',
          color: 'gray',
        }}>&copy; Copyright 2023. All Rights Reserves</span>
      </Box>
      <Box>
        <img style={{
          height: '50px',
        }} src='/img/payment-methods-epicerie-ludo.webp' />
      </Box>
    </Box>
  )
}

export default Bottom