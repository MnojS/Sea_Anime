import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import './SideDrawer.css'
import SeaAnime from '../../../assets/png/hey.png'
import Backdrop from '../Backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer','Close'];
    if(props.open) {
        attachedClasses = ['side-drawer', 'Open']
    }

    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <nav className={attachedClasses.join(' ')}>
                <ul>
                    <li>
                        <img src={SeaAnime} width="180px" style={{marginLeft:"-30%"}} />
                    </li>
                    <strong style={{marginRight:"75%", fontWeight:"lighter" , fontSize:"25px"}}>
                        General
                    </strong>
                    {NavigationItem.map((items ) => {
                        return (
                            <li key={items.title} width="160" style={{marginRight:"75%"}} > 
                                <a href={items.url} >
                                    {items.title}
                                </a> 
                            </li>
                        )
                    })}
                   
                    
                </ul>
            </nav>
        </React.Fragment>
    )

  
}
export default SideDrawer
