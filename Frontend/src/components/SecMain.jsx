import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './secondmaincontent.css'
import { useCookies } from 'react-cookie';
import hotel from '../assets/images/Hotel Booking-pana 1.png'


import Lucknow from '../assets/images/Lucknow.png'
import greater_noida from '../assets/images/greater_noida.png'
import chennai from '../assets/images/chennai.png'
import ghaziabad from '../assets/images/ghaziabad.png'
import gurgaon from '../assets/images/gurgaon.png'
import hyderabad from '../assets/images/hyderabad.png'
import nashik from '../assets/images/nashik.webp'
import nagpur from '../assets/images/nagpur.webp'
import mumbai from '../assets/images/mumbai.png'
import delhi from '../assets/images/delhi.png'
import noida from '../assets/images/noida.png'
import pune from '../assets/images/pune.png'
import rectangle from '../assets/images/Rectangle 7.png'
import frame from '../assets/images/Frame 1.png'

const SecMain=()=> {
  
  return (
    <div class="second-container">
    <div class="second-background-img"><img src={rectangle} alt="" id="imagedusri" /></div>
    <div class="second-image"> <img src={frame} alt="" id="imagetisri" /></div>
    <div class="second-heading">Explore Our Top Cities</div>
    <div class="item-container">
        <div class="button-serch">
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Enter city name,area etc" name="search" />
                <button type="submit"> <img class="location" src="/image/location.png" alt="" /> Near Me<i
                        class="fa fa-search"></i></button>
            </form>
        </div>
        <div class="item-circle">
            <div id="first-image" class="item-img"><img src={Lucknow} alt="" />
                <div class="text">Lucknow</div>
            </div>
            <div id="second-image" class="item-img"><img src={greater_noida} alt="" />
                <div class="text">Bhuneswr</div>
            </div>
            <div id="third-image" class="item-img"><img src={chennai} alt="" />
                <div class="text">Chennai</div>
            </div>
            <div id="fourth-image" class="item-img"><img src={ghaziabad} alt="" />
                <div class="text">Coimbtor</div>
            </div>
            <div id="fifth-image" class="item-img"><img src={gurgaon} alt="" />
                <div class="text">Gurgaon</div>
            </div>
            <div id="sixth-image" class="item-img"><img src={hyderabad} alt="" />
                <div class="text">Hydrabad</div>
            </div>
            <div id="seventh-image" class="item-img"><img src={pune} alt="" />
                <div class="text">Indore</div>
            </div>
            <div id="eight-image" class="item-img"><img src={nashik} alt="" />
                <div class="text">Jaipur</div>
            </div>

        </div>
        <div class="item-circle-2">
            <div id="nine-image" class="item-img"><img src={nagpur} alt="" />
                <div class="text">Kolkata</div>
            </div>
            <div id="tenth-image" class="item-img"><img src={mumbai} alt="" />
                <div class="text">Mumbai</div>
            </div>
            <div id="eleventh-image" class="item-img"><img src={delhi} alt="" />
                <div class="text">Delhi</div>
            </div>
            <div id="twelth-image" class="item-img"><img src={noida} alt="" />
                <div class="text">Noida</div>
            </div>
            <div id="thirteen-image" class="item-img"><img src={pune} alt="" />
                <div class="text">Pune</div>
            </div>
        </div>
    </div>
</div>

    )
}

export default SecMain
