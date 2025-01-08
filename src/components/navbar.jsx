import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StickyFooter from './stickyFooter';
import './Navbar.css';

// const navItems = ['About us', 'Training & Certification', 'University Outreach Program', 'Contact us']; // Re-add this line if it was accidentally removed
const navItems = ['About us', 'Contact us']; // Re-add this line if it was accidentally removed

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="drawer">
      <Box className="drawer-logo">
        <img src="logo.png" alt="Logo" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="drawer-item">
              <ListItemText className="drawer-text" primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box className="navbar" >
        <CssBaseline />
        <AppBar component="nav" className="app-bar" sx={{marginRight:0}}>
          <StickyFooter />
          <Toolbar className='toolbar'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Box className="logo-box">
              <img src="logo.png" alt="Logo" />
            </Box>
            <Box className="nav-items">
              {navItems.map((item) => (
                <Button key={item} className="nav-button">
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            className="drawer-container"
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </React.Fragment>
  );
}

export default Navbar;
