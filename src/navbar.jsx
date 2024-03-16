import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display: "flex", justifyContent: "space-around", backgroundColor: "black", color: "white"}}>
      <Link to={"/"}><p>Home</p></Link>
      <Link to={"/facilities"}><p>Facilities</p></Link>
      <Link to={"/rooms"}><p>Rooms</p></Link>
      <Link to={"/contact-us"}><p>Contact-us</p></Link>
    </div>
  )
}

export default Navbar
