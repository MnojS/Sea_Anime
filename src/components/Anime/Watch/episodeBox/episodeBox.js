import React from 'react'
import './episodeBox.css';
import { Button } from '@material-ui/core'
import { ArrowForwardIos, ArrowBackIos, FilterCenterFocus, Height, Report } from '@material-ui/icons';
import Rating from '../Ratings/Rating';


function EpisodeBox() {
    var indents = [];
    for (var i = 1; i < 13; i++) {
        indents.push(<span key={i}></span>);
    }
    return (
        <div>
            
            <div className="mirror_footer">    
                <div>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        <Report />Report
                    </Button>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        <FilterCenterFocus />Focus
                    </Button>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        <Height />Resize
                    </Button>
                </div>
                
                <div>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        <ArrowBackIos />Prev
                    </Button>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        See all
                    </Button>
                    <Button color="inherit" style={{fontSize:"10px"}} >
                        <ArrowForwardIos />Next
                    </Button>
                </div>
            </div>
            <Rating />
            <div className="epiBox">
                {indents.map((items) => {
                    return(<Button variant="contained" color="secondary" >{items.key}</Button>)
                })}
                
            </div>
        </div>
    )
}

export default EpisodeBox
