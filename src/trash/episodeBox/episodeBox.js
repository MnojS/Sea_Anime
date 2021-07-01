import React from 'react'
import './episodeBox.css';
import { Button } from '@material-ui/core'

function EpisodeBox() {
    var indents = [];
    for (var i = 0; i < 13; i++) {
        indents.push(<span key={i}></span>);
    }
    return (
        <div className="epiBox">
            {indents.map((items) => {
                return(<Button variant="contained" color="secondary" >{items.key}</Button>)
            })}
            
        </div>
    )
}

export default EpisodeBox
