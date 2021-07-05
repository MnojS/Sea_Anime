import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card } from '@material-ui/core'

export default function Example()
{
    var items = [
        {
            name: "Random Name #1",
            src:"https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            src:"https://c4.wallpaperflare.com/wallpaper/708/846/337/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Card style={{marginTop:"2%" , marginLeft:"10%" , background:"transparent" , width:"80%"}}>
            <img src={props.item.src} width="700" height="200" style={{marginTop:"3.5%"}} />
        </Card>
    )
}