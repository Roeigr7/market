import React, { useContext } from 'react';
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, setUser } = useContext(userContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenuLogout = () => {
    setAnchorElNav(null);
    localStorage.removeItem('name');
    setUser(false);
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
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            AT
          </Typography>
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
                    onClick={handleCloseNavMenu}
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
              {user && (
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    display: 'block',
                  }}
                >
                  <span style={{ fontWeight: '400', fontSize: '16px' }}>
                    hi
                  </span>{' '}
                  {user}
                </Typography>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
