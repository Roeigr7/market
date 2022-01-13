import { Grid } from '@mui/material';
import React from 'react'
import LoginForm from '../components/LoginForm';
import { useHistory } from "react-router-dom";

const LoginPage=()=> {
    return (
        
    <Grid container
     justifyContent='center'
     alignItems='center'
     pt={5} px={1}
      >

      <Grid item lg={6}md={7}sm={9}xs={12}
        p={3}
        sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
      >
            <LoginForm/>
            </Grid></Grid>
    )
}

export default LoginPage;
