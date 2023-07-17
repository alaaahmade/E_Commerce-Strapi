import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Box } from '@mui/material';
import { CustomLink, Item } from './Nav.Styled';

const Left = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '25px',

    }}>
      <Item>
        <img src='/img/en.png' style={{
          width: '30px'
        }} />
        <KeyboardArrowDownIcon/>
      </Item>
      <Item>
        <span>USD</span>
        <KeyboardArrowDownIcon/>
      </Item>
      <Item>
        <CustomLink to='/products/1'>Women</CustomLink>
      </Item>
      <Item>
        <CustomLink to='/products/2'>Men</CustomLink>
      </Item>
      <Item>
        <CustomLink to='/products/3'>Children</CustomLink>
      </Item>
    </Box>
  )
}

export default Left