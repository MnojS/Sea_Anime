import React from 'react'

const Liked = (props) => (
    props.liked ? <div 
    className='liked'
    onClick={props.clicked}></div> : null

);
    

export default Liked;