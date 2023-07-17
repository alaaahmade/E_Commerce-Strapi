import { Box } from '@mui/material'
import Top from './Top'
import Bottom from './Bottom'

const Footer = () => {
  return (
    <Box sx={{
      margin: '100px 200px 20px 200px'
    }}>
      <Top/>
      <Bottom/>
    </Box>
  )
}

export default Footer