import React from 'react'
import { Progress } from 'react-sweet-progress';
import { Button } from '@material-ui/core';
import "react-sweet-progress/lib/style.css";
import './Donate.css'

function Donate() {

    return (
        <div>
            <div>
                <h4>As many people asked for it, you can now watch
                    latest anime in multiple qualities on our new sister site <a>simply</a> </h4>
                <h5>Don't forget to join our Insta community!</h5>
            </div>
            <hr width="50" />
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <h3>Donations have been disabled for the time being</h3>
                <Button className="donateButton" style={{marginLeft:"10%" , textTransform:"inherit"}} variant="outlined" color="secondary">Donate</Button>
            </div>
            <Progress percent={60} status="success"  className="donateBar"/>
            <p style={{marginLeft:"60%"}}>
                $781.30 / $1140.00 for January 
            </p>
        </div>
    )
}

export default Donate
