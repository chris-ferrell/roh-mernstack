import React from 'react'
import { Link } from 'react-router-dom'

/*
function Navbar() {
  return (
    <header>
        <div className="container">Navbar
            <Link to="/">
                <h1>Realm of Hell</h1>
            </Link>
        </div>
    </header>
  )
}
*/


const Navbar = () => {

    return (
      
      <header>
        <div className="container">
          <Link to="/">
            <h4>Realm of Hell</h4>
          </Link>
          <Link to="/">
            <h4>button 2</h4>
          </Link>
        </div>
      </header>
    )
  }
  
  
  


export default Navbar