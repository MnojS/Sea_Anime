import React from 'react'
import Donate from './Donate/Donate'
import Recent from './Recent/Recent'

function Anime() {
  return (
    <div style={{marginTop:"3.69%"}}>
      <h4 style={{marginRight:"70%"}}>Recently Added</h4>
      <Recent />
      <h4 style={{marginRight:"75%"}}>Recent</h4>
      <Recent />
      <Donate />
    </div>
  )
}

export default Anime
