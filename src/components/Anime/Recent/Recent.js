import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia ,CardActions ,Button ,Card} from '@material-ui/core';
import { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import Liked from '../Favourite/Favourite';
import './Recent.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

function Recent(props) {

  const [like , setLike] = useState({active:'false' , class:'Liked'});

  function clickHandler() {
    setLike({class:'NoLike'})
  }

  const poster = [
    {
      id:1,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug-Cup",
      episodes: 13
    },
    {
      id:2,
      src:"https://4anime.to/image/Mars-Red.jpg",
      title:"Mars-Red",
      episodes:12
    },
    {
      id:3,
      src:"https://4anime.to/image/Fruits-Basket-The-Final.jpg",
      title:"Fruits-Basket",
      episodes:14
    },
    {
      id:4,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug-Cup",
      episodes:16
    },
    {
      id:5,
      src:"https://4anime.to/image/Itazura-Guma-no-Gloomy.jpg",
      title:"XYItazura-Guma-no",
      episodes:12
    },
    {
      id:6,
      src:"https://4anime.to/image/Hige-wo-Soru-Soshite-Joshikousei-wo-Hirou.jpg",
      title:"Hige-wo-Soru-Soshite",
      episodes:11
    },
    {
      id:7,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug",
      episodes:5
    },
    {
      id:8,
      src:"https://4anime.to/image/Nomad-Megalo-Box-2.jpg",
      title:"Nomad-Megalo-Box",
      episodes:13
    },
    {
      id:9,
      src:"https://4anime.to/image/Yuukoku-no-Moriarty-2nd-Season.jpg",
      title:"Yuukoku-no-Moriarty",
      episodes:16
    },
    {
      id:10,
      src:"https://4anime.to/image/Koi-to-Yobu-ni-wa-Kimochi-Warui.jpg",
      title:"Koi-to-Yobu-ni-wa-Kimochi",
      episodes:8
    },
    {
      id:11,
      src:"https://4anime.to/image/Ijiranaide-Nagatoro-san.jpg",
      title:"Ijiranaide-Nagatoro",
      episodes:17
    },
    {
      id:12,
      src:"https://4anime.to/image/Jujutsu-Kaisen.jpg",
      title:"Jujutsu-Kaisen",
      episodes:9
    },
    {
      id:13,
      src:"https://4anime.to/image/Naruto-Shippuuden-Cover-1.jpg",
      title:"Naruto-Shippuuden",
      episodes:14
    },
    {
      id:14,
      src:"https://4anime.to/image/Kiseijuu-Sei-no-Kakuritsu.jpg",
      title:"Kiseijuu-Sei",
      episodes:9
    },

  ]

  const classes = useStyles();

  let attachedClasses = ['favorite','NoLike'];
    if(props.NoLike) {
        attachedClasses = ['favorite', 'Liked']
    }

  return (
    <div className="wrapper">
        {poster.map((item) => {
      <Liked liked={props.NoLike} clicked={props.Liked} />
          return(
              <div to="trash" className="RecentContainer">
                <Card className={classes.root} >
                  
                    <CardMedia
                      className={'media'}
                      image={item.src}
                      title="Paella dish">
                        
                        <FavoriteIcon color="inherit" className={attachedClasses.join(' ')} />
                      </CardMedia>
                </Card>
                <Link to="trash">
                  <a href={item.src} style={{fontSize:"13px" ,}}>{item.title}</a>
                  <h4 style={{fontWeight:"lighter" , marginTop:"5%"}} > Episodes {item.episodes} </h4>
                </Link>
              </div>
          )
          
        })}

        
    </div>
  )
}

export default Recent

