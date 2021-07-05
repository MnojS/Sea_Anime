import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import SeaAnime from '../../../assets/png/SeaAnime.png'
import './SignIn.css';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

const SignIn = React.memo(props => {

  return (
    <section className="ingredient-form">
      <img src={SeaAnime} width="220" />
      <h2>Sign In</h2>
      <Card>
        <form >
          <div className="form-control">
            <label htmlFor="title">Email</label>
            <input 
            placeholder="example@12.com"
            type="email" 
            id="title"/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Password</label>
            <input 
            type="password"
            placeholder="********"
            />
          </div>
          <div>
          </div>  
          <FormControlLabel
            className="checkBox"
            style={{marginRight:"60%"}}
            control={<Checkbox color="secondary" />}
            label="Remember me"
          />
          <div className="ingredient-form__actions">
            <Button color="secondary" variant="contained" type="submit" style={{width:"100%"}}>Sign In</Button>
          </div>
          <div className="forgot_signUp">
            <Link to="forgotPassword/?">
              <Button color="inherit" style={{fontSize:"10px" }}  >forgot password?</Button>
            </Link>
            <Link to="sign-up">
              <Button color="inherit"  style={{fontSize:"10px" }} >Don't have an account? Sign Up</Button>
            </Link>
          </div>
          <p>Copyright © <Link to="/">Sea-Anime</Link>  {new Date().getFullYear()} </p>
        </form>
      </Card>
    </section>
  );
});

export default SignIn;
