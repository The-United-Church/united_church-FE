import React from 'react'

export default function Header1() {
  return (
    <header>
        <div class="top-bar">
            <div class="container">
                <p>Commercial Waste Services in your Area. Dial NOW (+234) 8119951308</p>
                <p>Mon - Sat: 7am to 7pm Sunday is CLOSED</p>
                <div classList="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div classList="container">
            <div classList="logo">
                {/* <img src={logo1} alt="Throwaydotty Logo"/> */}
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <a href="#" class="btn">Get Pick Up</a>
        </div>
    </header>
  )
}
