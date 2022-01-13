import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState('');
  const { user, setUser } = useContext(userContext);

  let navigate = useNavigate();
  const handleSubmit = () => {
    setFormSubmitted(true);
    if (name && password) {
      setUser(name);
      navigate(`/market`);
    }
  };
  return (
    <>
      <Typography align='center' variant='h3' component='h1' pb={4}>
        Login
      </Typography>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            error={Boolean(formSubmitted && !name)}
            helperText={!name && 'name Required'}
            fullWidth
            label='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Insert Name'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            error={Boolean(formSubmitted && !password)}
            helperText={!password && 'Password Required'}
            fullWidth
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Insert Password'
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSubmit}
            size='large'
            fullWidth
            variant='contained'
          >
            Get in!
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
