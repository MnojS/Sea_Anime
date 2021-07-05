import React from 'react'
import { Button, Card } from '@material-ui/core'
import Instagram from '@material-ui/icons/Instagram'
import Icon from '../../assets/png/SeaAnime.png'
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons'
import './Footer.css'

function Footer() {
	return (
		<footer>
		<div className="footerContainer"  >
			<Card style={{background:"transparent" , color:'white'}} className="Box1">
				<img src={Icon} width="200" />
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Eligendi quasi perferendis ratione perspiciatis accusantium</span>
			</Card>
			<Card  style={{background:"transparent" , color:'white'}}className="Box2">
				<a>Home</a>
				<a>Random</a>
				<a>Genre</a>
				<a>Liked</a>
			</Card>
			<Card style={{background:"transparent" , color:'white'}} className="Box3">
				<a>Privacy Policy</a>
				<a>Terms and Conditions</a>
				<a>Partners</a>
			</Card>
			<Card style={{background:"transparent" , color:'white'}} className="Box4">
				<Card style={{background:"transparent" , color:'white'}}>
					<Instagram color="secondary" style={{marginLeft:"30px"}}  />
					<Twitter color="primary" style={{marginLeft:"30px"}} />
					<LinkedIn color="primary" style={{marginLeft:"30px"}}  />
					<Facebook color="primary" style={{marginLeft:"30px"}} />
				</Card>
				<Button variant="contained" color="secondary" style={{marginTop:"40px" , borderRadius:"5px"}}>Contact Us</Button>
			</Card>
		</div>
		<span>SeaAnime @ {new Date().getFullYear()}</span>
		</footer>
	)
}

export default Footer
