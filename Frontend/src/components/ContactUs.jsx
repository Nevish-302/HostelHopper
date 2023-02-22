import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './contactus.css'
import FacebookNegative from '../assets/images/social/Facebook - Negative.png'
import LinkedInNegative from '../assets/images/social/LinkedIn - Negative.png'
import TelegramNegative from '../assets/images/social/Telegram - Negative.png'
import TwitterNegative from '../assets/images/social/Twitter - Negative.png'
import YouTubeNegative from '../assets/images/social/YouTube - Negative.png'
import image2 from '../assets/images/image 2.png'
import image3 from '../assets/images/image 3.png'
import image4 from '../assets/images/image 4.png'
import Mailinbox from '../assets/images/Mail inbox app.png'
import image5 from '../assets/images/image 5.png'
import logo from '../assets/images/logo.png'

const Contact=()=> {
  
  return (
    <div class="contactus-container">
    <div class="hostelhopperhead">
        <div class="hostelhopperlogo4"><img src={logo} alt="" /></div>
        <div class="hostelhoppertext-1">Hostel Hopper</div>
    </div>
    <div id="contactusparagraph">Award Winning Student Experience</div>
    <hr id="line-3" />
    <div class="socialicon-container">
        <div class="social" id="insta"><img src={FacebookNegative} alt="" /></div>
        <div class="social" id="youtu"><img src={LinkedInNegative} alt="" /></div>
        <div class="social" id="face"><img src={TelegramNegative} alt="" /></div>
        <div class="social" id="twit"><img src={TwitterNegative} alt="" /></div>
        <div class="social" id="linkdin"><img src={YouTubeNegative} alt="" /></div>
    </div>
    <div class="available">
        <div class="avil" id="googleplay"><img src={image2} alt="" /></div>
        <div class="avil" id="appstore"><img src={image3} alt="" /></div>
    </div>
    <div class="phone">
        <div class="call-logo"><img src={image4} id="call-1" alt="" /></div>
        <div id="heading">+91123456789</div>
        <div id="para">TIMINGS : 9:00 AM TO 6:00 PM</div>
    </div>
    <div class="email">
        <div class="email-logo"><img src={Mailinbox} id="call-1" alt="" /></div>
        <div id="heading-1">support@hostelhopper.in</div>  
    </div>
    <div class="whatsapp">
        <div class="whatsapp-logo"><img src={image5} id="call-1" alt="" /></div>
        <div id="heading-2">+91123456789</div>  
    </div>
    <div class="callback-button">
        <div class="callback" id="heading-3">Receive A Call Back From Our Team!</div>
        <div class="call-serchbar">
            <div class="wrap-1">
                <div class="search-1">
                    <input type="text" class="searchTerm-1" placeholder="Enter Mobial Number" />
                    <button type="submit" class="searchButton-1" id="serchButton-5"> <div id="getcallback">Get a Call Back</div> <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="provide-service">
        <div class="service-1" id="location-1">LOCATION</div>
        <div id="line-11">
            <hr class="first-line" />
        </div>
        <div id="locatetext">
            <ul>
                <li>Delhi</li>
                <li>Banglore</li>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>Ahmedabad</li>
                <li>Dehradun</li>
                <li>Noida</li>
                <li>Indore</li>
                <li>Jaipur</li>
                <li>Gurgaon</li>
              </ul>
        </div>

        <div class="service-1" id="location-1">MENU</div>
        <div id="line-12">
            <hr class="first-line" />
        </div>
        <div id="menutext">
            <ul>
                <li>Locate</li>
                <li>About Us</li>
                <li>Contacts</li>
              </ul>
        </div>
        
        <div class="service-1" id="location-1">SERVICE</div>
        <div id="line-13">
            <hr class="first-line" />
        </div>
        <div id="servicetext">
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Refund Policy</li>
              </ul>
        </div>   
    </div>
    <hr id="main-line" />
    <p id="copyrightclaim">Copyright © 2023 Hostel Hopper. All Rights Reserved.</p>
</div>
    )
}

export default Contact
