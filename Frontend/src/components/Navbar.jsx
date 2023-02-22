import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import "./Navbar.css";
import { useCookies } from 'react-cookie';
import logo from '../assets/images/logo.png'
import './navbar.css'
import search from '../assets/images/search.png'

const Navbar=()=> {
  const [a, seta] = useState(0)
  const [cookies, setCookie] = useCookies(['user'])
  setCookie("Hello", "Jackass", {
    path: '/'
  })
  console.log(cookies, cookies.auth)
  const login=()=>{
    history("/login");
  }
  return (
    <div class="navbar">

<div  className='nav-part-2'>
    <div class="logo-container">
        <img src={logo} alt="logo image" class="logo" />
        <div class="logo-text">Hostel Hopper</div>
    </div>
    <div class="nav-item">
        <div><a href="#Locate">Locate</a></div>
        <div><a href="About">About</a></div>
        <div><a href="#contactus">Contact Us</a></div>
    </div>
</div>
    <div class="nav-serchbar">
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Location,University or Property" />
                <button type="submit" class="searchButton" id="serchButton-1">
                    <img src={search} alt="" />
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar
