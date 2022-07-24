
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/category/general/Navbar'
import About from './pages/About'
import Economy from './pages/Economy'
import Shop from './pages/Shop'
import Profile from './Oauth2/Profile'
import Leaderboard from './pages/leaderboard'
import Casino from './pages/Casino'
import AdminPanel from './pages/adminPanel'


import './navbar.css'





function App() {
  return (
    <div className="App">
      <BrowserRouter>



      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./navbar.css" />
          <title>Document</title>
      </head>

      <body>
        <nav class="navbar">
          

          <div class="logo">ROH</div>
          

          <ul class="nav-links">
            

            
            

            <div class="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/profile">Profile</a></li>
              <li class="services">
                <a href="/economy">Economy</a>
                

                <ul class="dropdown">
                  <li><a href="/casino">Casino </a></li>
                  <li><a href="/shop">Hell Shop</a></li>
                  <li><a href="/leaderboard">Leaderboard</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="/leaderboard"> </a></li>
              <li><a href="/">Login</a></li>
            </div>
          </ul>
        </nav>
      </body>




    
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/economy" element={<Economy />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/adminPanel" element={<AdminPanel />} />
              
            </Routes>

          </div>
      </BrowserRouter>
    </div>
  )
}

export default App