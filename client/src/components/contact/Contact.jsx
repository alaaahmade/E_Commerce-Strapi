import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <Box sx={{
      backgroundColor: '#2879fe',
      color: '#fff',
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      width: '100vw'
    }}>
      <Box sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
         justifyContent: 'space-between',

      }}>
        <span>
          BE IN TOUCH WITH US:
        </span>
        <Box className="mail">
          <input style={{
            padding: '10px',
            border: 'none',
            outline: 'none',
            borderRadius: '5px 0 0 5px'
          }} type="text" placeholder='enter your email...' />
          <button style={{
            padding: '10px',
            border: 'none',
            borderRadius: ' 0 5px 5px 0 ',
            color: '#fff',
            backgroundColor: '#333',
            cursor: 'pointer'
          }}>JOIN US</button>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '10px',
        }}>
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <PinterestIcon/>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact