import { AppBar, IconButton, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar () {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  function handleClose(event) {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <PetsIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Vet Telehealth</Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button 
              id="provider-button"
              color="inherit" 
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Providers
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'provider-button',
              }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/clientmanagement">Client Management</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/myschedule">My Schedule</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/revenue">Revenue</MenuItem>
            </Menu>
            <Button color="inherit">Patients</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;