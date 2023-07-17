import { Box } from '@mui/material'
import { CustomLink } from './Nav.Styled'

const Center = () => {
  return (
    <Box sx={{
  fontSize: '30px',
  letterSpacing: '2px',

    }}>
      <CustomLink to='/'>LAMASTORE</CustomLink>
    </Box>
  )
}

export default Center