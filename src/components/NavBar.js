import { AppBar, IconButton, Toolbar, Typography, Box, Button } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar () {
  // const [providerOptions, setProviderOptions] = useState(false);

  // function handleProviderClick() {
  //   setProviderOptions(!providerOptions)
  // }

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
            <Button color="inherit" component={Link} to="/providers">Providers</Button>
            <Button color="inherit" component={Link} to="/patients">Patients</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;