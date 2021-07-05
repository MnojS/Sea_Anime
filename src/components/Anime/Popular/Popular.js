import React, { Component } from 'react'
import {CardMedia ,Card, Button} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
// import Liked from '../Favourite/Favourite';
import './Popular.css'

class Popular extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       poster:[
        {
          id:1,
          src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
          title:"Yakunara-Mug-Cup",
          episodes:"Episodes 12 ",
        },
        {
          id:2,
          src:"https://4anime.to/image/Mars-Red.jpg",
          title:"Mars-Red",
          episodes:"Episodes 12 ",
        },
        {
          id:3,
          src:"https://4anime.to/image/Fruits-Basket-The-Final.jpg",
          title:"Fruits-Basket",
          episodes:"Episodes 12 ",
        },
        {
          id:4,
          src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
          title:"Yakunara-Mug-Cup",
          episodes:"Episodes 12 ",
        },
        {
          id:5,
          src:"https://4anime.to/image/Itazura-Guma-no-Gloomy.jpg",
          title:"XYItazura-Guma-no",
          episodes:"Episodes 12 ",
        },
        {
          id:6,
          src:"https://4anime.to/image/Hige-wo-Soru-Soshite-Joshikousei-wo-Hirou.jpg",
          title:"Hige-wo-Soru-Soshite",
          episodes:"Episodes 12 ",
        },
        {
          id:7,
          src:"https://4anime.to/image/Yakunara-Mug-Cup-mo.jpg",
          title:"Yakunara-Mug",
          episodes:"Episodes 12 ",
        },
        {
          id:8,
          src:"https://4anime.to/image/Nomad-Megalo-Box-2.jpg",
          title:"Nomad-Megalo-Box",
          episodes:"Episodes 12 ",
        },
        {
          id:9,
          src:"https://4anime.to/image/Yuukoku-no-Moriarty-2nd-Season.jpg",
          title:"Yuukoku-no-Moriarty",
          episodes:"Episodes 12 ",
        },
        {
          id:10,
          src:"https://4anime.to/image/Koi-to-Yobu-ni-wa-Kimochi-Warui.jpg",
          title:"Koi-to-Yobu-ni-wa-Kimochi",
          episodes:"Episodes 12 ",
        },
        {
          id:11,
          src:"https://4anime.to/image/Ijiranaide-Nagatoro-san.jpg",
          title:"Ijiranaide-Nagatoro",
          episodes:"Episodes 12 ",
        },
        {
          id:12,
          src:"https://4anime.to/image/Jujutsu-Kaisen.jpg",
          title:"Jujutsu-Kaisen",
          episodes:"Episodes 12 ",
        },
        {
          id:13,
          src:"https://4anime.to/image/Naruto-Shippuuden-Cover-1.jpg",
          title:"Naruto-Shippuuden",
          episodes:"Episodes 12 ",
        },
        {
          id:14,
          src:"https://4anime.to/image/Kiseijuu-Sei-no-Kakuritsu.jpg",
          title:"Kiseijuu-Sei",
          episodes:"Episodes 12 ",
        },
       ],
       isActive:false,
       
       
    }
  }
  
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {

    const isActive = this.state.isActive;

    return (
      <div className="wrapper">
        {this.state.poster.map((item) => {
          return(
              <div to="trash" className="PopularContainer">
                <Card className={'root'} >
                    <CardMedia
                      className={'media'}
                      image={item.src}
                      title="Paella dish">
                        <Button onClick={this.handleToggle} >
                          <FavoriteIcon color="inherit" className={isActive ? 'Liked' : 'NoLiked'} />
                        </Button>
                      </CardMedia>
                </Card>
                <Link to="trash">
                  <a href={item.src} style={{fontSize:"13px" ,}}>{item.title}</a>
                  <h4 style={{fontWeight:"lighter" , marginTop:"5%"}} > {item.episodes} </h4>
                </Link>
              </div>
          )        
        })} 
    </div>
    )
  }
}

export default Popular

