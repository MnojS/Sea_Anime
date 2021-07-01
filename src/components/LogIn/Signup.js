import React from 'react';
import {Button , CssBaseline, TextField, FormControlLabel} from '@material-ui/core';
import {Checkbox ,Grid, Container } from '@material-ui/core';
import {Link} from 'react-router-dom'
import SeaAnime from '../../assets/png/SeaAnime.png'
import './SignUp.css'

const SignUp = () => {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={'paper'}>
        <img src={SeaAnime} alt="logo" width="150" />
        <h1 style={{color:"powderblue"}}>
          Sign up
        </h1>
        <form className={'form'} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                color="secondary"
                style={{color:'wheat'}}
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox  color="primary" />}
                label="I agree to all the terms and condition"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"green"}}
            className={'submit'}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {'Copyright © '}
      <Link to="/sign-in">
        SeaAnime
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Container>
  );
}
export default SignUp