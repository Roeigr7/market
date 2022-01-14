import React, { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Menu,
  Box,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  Container,
} from '@mui/material';
import { userContext } from '../context/userContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { user, setUser } = useContext(userContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenuLogout = () => {
    localStorage.removeItem('name');
    setUser(false);
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            AT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  md: 'none',
                  alignSelf: 'center',
                },
              }}
            >
              <div
                style={{
                  padding: '1px 7px',
                  border: '2px solid white',
                  borderRadius: '50%',
                }}
              >
                AT
              </div>
            </Typography>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!user && (
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>Login</Typography>
                  </MenuItem>
                </Link>
              )}
              {user && (
                <Link
                  to='/market'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>Market</Typography>
                  </MenuItem>
                </Link>
              )}{' '}
              {user && (
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleCloseNavMenuLogout}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!user && (
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
              </Link>
            )}
            {user && (
              <>
                <Link
                  to='/market'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Market
                  </Button>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <Button
                    onClick={handleCloseNavMenuLogout}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Logout
                  </Button>
                </Link>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 0 }}>
              {user && <p className='max-text'>{user}</p>}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
