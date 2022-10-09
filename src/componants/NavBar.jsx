import React from 'react'
const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
           <h2> <span className="logo"> Make My trip</span></h2>
           <div className= "navItems">
               <button className="navButton"> Register</button>
               <button className="navButton"> Login</button>
             </div>
        </div>
    </div>
  )
}

export default NavBar
