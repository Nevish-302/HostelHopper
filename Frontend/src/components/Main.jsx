import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './maincontent.css'
import { useCookies } from 'react-cookie';
import hotel from '../assets/images/Hotel Booking-pana 1.png'

const Main=()=> {
  
  return (
    <div className='MainContent'>
    <div class="left-main-content">
        <div class="left-content-paragraph">Simplify your accommodation search with</div>
        <div class="left-content-heading">Hostel Hopper</div>
        <button type="button" class="btn-signup">Sign Up</button>
        <button type="button" class="btn-signin">Sign In</button>
    </div>
    <div class="right-main-content">
        <div class="main-content-img"><img id="main-image" src={hotel} alt="" />
        </div>
    </div>
    <div class="content-feedback">
        <div class="numbers">
            <div class="happy-number">2000+</div>
            <div class="happy-hoppers">Happy Hoppers</div>
        </div>
    </div>
    <div class="circle">
        <span class="dot" id="firstcircle"></span>
        <span class="dot" id="Secondcircle"></span>
        <span class="dot" id="Thirdcircle"></span>
        <span class="dot" id="fourthtcircle"></span>
        <span class="dot" id="fifthstcircle"></span>
    </div>
</div>
    )
}

export default Main
