import { Box } from '@mui/material'
import Left from './Left'
import Center from './Center'
import Right from './Right'

const Wrapper = () => {
  return (
    <Box sx={{
      padding: '10px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Left/>
      <Center/>
      <Right/>
    </Box>
  )
}

export default Wrapper