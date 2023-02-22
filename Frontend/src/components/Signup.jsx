import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './maincontent.css'
import { useCookies } from 'react-cookie';
import icongoogle from '../assets/images/icon-google.svg'
import iconfacebook from '../assets/images/icon-facebook.svg'
import iconapple from '../assets/images/icon-apple.svg'
import icontwitter from '../assets/images/icon-twitter.svg'
import back from '../assets/images/illustration-2.svg'

const SignUp=()=> {

  return (
    <div class="site-wrap d-md-flex align-items-stretch">
    <img class="bg-img" src={back} />
    <div class="form-wrap">
        <div class="form-inner">
            <h1 class="title">Sign up</h1>
            <p class="caption mb-4">Create your account in seconds.</p>

            <form action="#" class="pt-3">

                <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="Full Name" />
                    <label for="name">Username</label>
                </div>

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
                        <label for="remember" class="form-check-label">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                    </div>
                </div>

                <div class="d-grid mb-4">
                    <button type="submit" class="btn btn-primary">Create an account</button>
                </div>

                <div class="mb-2">Already a member? <a href="index.html">Log in</a></div>

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

export default SignUp
