import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

const Navbar=() =>{
 

  return (
    <Box sx={{height:"64px",width:"100%"}} >

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
<Box width="100%" display="flex" justifyContent="space-between"  >

        <Link to="/" >Products</Link>
        <Link to="/new-product">Add Product</Link>
        <Link to="/new-category">Add category</Link>
</Box>
         
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default Navbar;
