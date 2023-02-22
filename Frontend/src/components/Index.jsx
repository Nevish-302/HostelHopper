import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './style.css'
import './style.scss'
import back from '../assets/images/20944167.jpg'
import { useCookies } from 'react-cookie';
import logo from '../assets/images/logo.png'
import icongoogle from '../assets/images/icon-google.svg'
import iconfacebook from '../assets/images/icon-facebook.svg'
import iconapple from '../assets/images/icon-apple.svg'
import icontwitter from '../assets/images/icon-twitter.svg'

const Index=()=> {
    const Sty = {backgroundImage: back}
  
  return (
    <div class="site-wrap d-md-flex align-items-stretch">
        <img class="bg-img" src={back} />
        <div class="form-wrap">
            <div class="form-inner">
                <h1 class="title">Login</h1>
                <p class="caption mb-4">Please enter your login details to sign in.</p>

                <form action="#" class="pt-3">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="email" placeholder="info@example.com" />
                        <label for="email">Email Address</label>
                    </div>

                    <div class="form-floating">
                        <span class="password-show-toggle js-password-show-toggle"><span class="uil"></span></span>
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                        <label for="password">Password</label>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="remember" />
                            <label for="remember" class="form-check-label">Keep me logged in</label>
                        </div>
                        <div><a href="#">Forgot password?</a></div>
                    </div>
                    
                    <div class="d-grid mb-4">
                        <button type="submit" class="btn btn-primary">Log in</button>
                    </div>

                    <div class="mb-2">Don’t have an account? <a href="signup.html">Sign up</a></div>

                    <div class="social-account-wrap">
                        <h4 class="mb-4"><span>or continue with</span></h4>
                        <ul class="list-unstyled social-account d-flex justify-content-between">
                            <li><a href="#"><img src={icongoogle} alt="Google logo" /></a></li>
                            <li><a href="#"><img src={iconfacebook} alt="Facebook logo" /></a></li>
                            <li><a href="#"><img src={iconapple} alt="Apple logo" /></a></li>
                            <li><a href="#"><img src={icontwitter} alt="Twitter logo" /></a></li>
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    </div>
    )
}

export default Index
