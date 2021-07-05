import React from 'react';
import Card from '../UI/Card';
import SeaAnime from '../../../assets/png/SeaAnime.png'
import './SignUp.css';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

const SignUp = React.memo(props => {

  return (
    <section className="ingredient-form">
      <img src={SeaAnime} width="220" />
      <h2>Sign In..</h2>
      <Card>
        <form >
          <div className="form-control">
            <div style={{display:"grid" , gridTemplateColumns:'repeat(2,auto)' , gridGap:'50px' }}>
                <input 
                placeholder="First Name *"
                type="text" 
                id="title"/>     
                <input 
                placeholder="Last Name *"
                type="email" 
                id="title"/>     
            </div> 
            <label htmlFor="title">Email</label>
            <input 
            placeholder="example@12.com *"
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
            style={{marginRight:"0%"}}
            control={<Checkbox color="secondary" />}
            label="I want to receive inspiration, marketing promotions and updates via email"
          />
          <div className="ingredient-form__actions">
            <Button color="secondary" variant="contained" type="submit" style={{width:"100%"}}>Sign Up</Button>
          </div>
          <div className="forgot_signUp">
            <Link to="sign-in">
              <Button color="inherit"  style={{fontSize:"10px" }} >Already have an account? Sign In</Button>
            </Link>
          </div>
          <p>Copyright © <Link to="/">Sea-Anime</Link>  {new Date().getFullYear()} </p>
        </form>
      </Card>
    </section>
  );
});

export default SignUp;
