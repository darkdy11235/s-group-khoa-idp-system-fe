// components/layout/Header.tsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import Link from 'next/link'; // Import Link from next/link

const BlackAppBar = styled(AppBar)({
  backgroundColor: 'black',
});

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BlackAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            S-CIAM
          </Typography>
          {/* Add Link components for login and register buttons */}
          <Link href="/login">
            <Button variant="outlined" color="inherit" sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
              mr: 1,
            }}>Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="outlined" color="inherit" sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}>Register</Button>
          </Link>
        </Toolbar>
      </BlackAppBar>
    </Box>
  );
};

export default Header;
