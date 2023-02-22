import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import "./Navbar.css";
import { useCookies } from 'react-cookie';
import logo from '../assets/images/logo.png'
import './aboutussection.css'
import search from '../assets/images/search.png'
import Lucknow from '../assets/images/Lucknow.png'
import vikas from '../assets/images/vikas.jpg'

const About=()=> {
  
  return (
    <div class="aboutus-container">
        <div id="hostelhoppertext">Ab   out Hostel Hopper</div>
        <hr id="line" />
        <div id="aboutusparagraph1" class="aboutpara">We, at Hostel Hopper are India's fastest-growing network
            of managed
            Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of
            our designs and technology.Our services across the country will help you find and book Paying Guest
            (PG) rental homes.</div>
        <div id="aboutusparagraph2" class="aboutpara">We, at Hostel Hopper are India's fastest-growing network
            of managed
            Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of
            our designs and technology.Our services across the country will help you find and book Paying Guest
            (PG) rental homes.We, at Hostel Hopper, are India's fastest-growing network of managed Paying Guest
            (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs
            and technology.......</div>
        <button type="button" id="readmorebutton" onclick="alert('Hello world!')">READ MORE</button>
        <div id="meatteam">Meet Our Team</div>
        <hr id="line-2" />
        <div id="aboutparagraph3">HooLiv team is lead by serial entrepreneurs who are looking
            to leverage their experience of having taken their previous venture from an idea through exit and
            eventually to a highly successful exit. The team is looking to bring their significant management,
            operations and technology skills to disrupt the highly un-organised student accommodation industry.
        </div>
        <div class="image-circle-2">
            <div id="first-image-25" class="item-img-1"><img src={Lucknow} alt="" />
                <div class="text-1" id="text-2">Yashu Mittal</div>
                <div class="text-1" id="text-3">CEO</div>
            </div>
            <div id="first-image-21" class="item-img-1"><img src={vikas} alt="" />
                <div class="text-1" id="text-2">Vikas Swaraj</div>
                <div class="text-1" id="text-3">CEO</div>
            </div>
            <div id="first-image-22" class="item-img-1"><img src={Lucknow} alt="" />
                <div class="text-1" id="text-2">Yashu Mittal</div>
                <div class="text-1" id="text-3">CEO</div>
            </div>
            <div id="first-image-23" class="item-img-1"><img src={Lucknow} alt="" />
                <div class="text-1" id="text-2">Yashu Mittal</div>
                <div class="text-1" id="text-3">CEO</div>
            </div>
            <div id="first-image-24" class="item-img-1"><img src={Lucknow} alt="" />
                <div class="text-1" id="text-2">Yashu Mittal</div>
                <div class="text-1" id="text-3">CEO</div>
            </div>
        </div>
    </div>
    )
}

export default About
