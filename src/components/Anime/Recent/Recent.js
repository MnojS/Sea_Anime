import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia ,CardActions ,Button ,Card} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Recent.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

function Recent() {

  const poster = [
    {
      id:1,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug-Cup",
      episodes:"Episodes 12 "
    },
    {
      id:2,
      src:"https://4anime.to/image/Mars-Red.jpg",
      title:"Mars-Red",
      episodes:"Episodes 12 "
    },
    {
      id:3,
      src:"https://4anime.to/image/Fruits-Basket-The-Final.jpg",
      title:"Fruits-Basket",
      episodes:"Episodes 12 "
    },
    {
      id:4,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug-Cup",
      episodes:"Episodes 12 "
    },
    {
      id:5,
      src:"https://4anime.to/image/Itazura-Guma-no-Gloomy.jpg",
      title:"XYItazura-Guma-no",
      episodes:"Episodes 12 "
    },
    {
      id:6,
      src:"https://4anime.to/image/Hige-wo-Soru-Soshite-Joshikousei-wo-Hirou.jpg",
      title:"Hige-wo-Soru-Soshite",
      episodes:"Episodes 12 "
    },
    {
      id:7,
      src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
      title:"Yakunara-Mug",
      episodes:"Episodes 12 "
    },
    {
      id:8,
      src:"https://4anime.to/image/Nomad-Megalo-Box-2.jpg",
      title:"Nomad-Megalo-Box",
      episodes:"Episodes 12 "
    },
    {
      id:9,
      src:"https://4anime.to/image/Yuukoku-no-Moriarty-2nd-Season.jpg",
      title:"Yuukoku-no-Moriarty",
      episodes:"Episodes 12 "
    },
    {
      id:10,
      src:"https://4anime.to/image/Koi-to-Yobu-ni-wa-Kimochi-Warui.jpg",
      title:"Koi-to-Yobu-ni-wa-Kimochi",
      episodes:"Episodes 12 "
    },
    {
      id:11,
      src:"https://4anime.to/image/Ijiranaide-Nagatoro-san.jpg",
      title:"Ijiranaide-Nagatoro",
      episodes:"Episodes 12 "
    },
    {
      id:12,
      src:"https://4anime.to/image/Jujutsu-Kaisen.jpg",
      title:"Jujutsu-Kaisen",
      episodes:"Episodes 12 "
    },
    {
      id:13,
      src:"https://4anime.to/image/Naruto-Shippuuden-Cover-1.jpg",
      title:"Naruto-Shippuuden",
      episodes:"Episodes 12 "
    },
    {
      id:14,
      src:"https://4anime.to/image/Kiseijuu-Sei-no-Kakuritsu.jpg",
      title:"Kiseijuu-Sei",
      episodes:"Episodes 12 "
    },

  ]

  const classes = useStyles();

  const icon = <FavoriteIcon />

  return (

    <div className="wrapper">

        {poster.map((item) => {
          return(
              <div className="RecentContainer">
                {/* <FavoriteIcon  color="secondary" className="favorite" /> */}
                <Card className={classes.root} >
                  
                    <CardMedia
                      className={'media'}
                      image={item.src}
                      title="Paella dish">
                        
                        <FavoriteIcon color="inherit" className="favorite" />
                      </CardMedia>
                </Card>
                
                      <a href={item.src} style={{fontSize:"13px" ,}}>{item.title}</a>
                      <h4 style={{fontWeight:"lighter" , marginTop:"5%"}} > {item.episodes} </h4>
              </div>
          )
          
        })}
        
        
    </div>
  )
}

export default Recent

