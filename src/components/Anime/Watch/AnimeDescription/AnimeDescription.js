import React from 'react'
import { Button, Card } from '@material-ui/core'
import './AnimeDescription.css'

function AnimeDescription() {
    return (
        <div className="animeDesc">
            <div>
                <a href="Adventure" > Adventure </a>
                <a href="Fantasy" > Fantasy </a>
            </div>
            <Card className="animeDescCard" style={{backgroundColor:"transparent" , color:'white'}}>
                <p>
                    The heroine is a normal girl, 
                    until one day she is invited to another world and becomes the princess of the dream world, 
                    where people use dreams as the energy to live. 
                    One day, the dream world is being attacked by something called "yumekui" ("dream eater"), 
                    and many princes are being attacked by it. 
                    The heroine must wake them up to save the dream world, 
                    as the princes are unable to wake up due to having their dreams stolen.
                </p>
                <img src={'https://4anime.to/image/Jujutsu-Kaisen.jpg'} width='300' />
                
            </Card>
        </div>
    )
}

export default AnimeDescription
