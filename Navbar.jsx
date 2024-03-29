import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee
          </Typography>
          <Button color="inherit" variant='outlined'>
          <Link to={'/'}>Home</Link>
          </Button>
          <Button color="inherit" variant='outlined'>
          <Link to={'/add'}>add emp</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}