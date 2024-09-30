// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { RouterProvider } from "react-router-dom";
// import { Provider  } from 'react-redux';
// import { store } from './store/store';
// import router from './routes';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo1 from './assets/logos/img2.png'
import Header1 from './components/Header1';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
// import { Top_bar } from './top_bar';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header1/>
    <Hero/>
    <About/>
    <Service/>


    

    <h2 class="reach-out"> Lets Start A Conversation</h2>

    {/* <!-- Contact Form Section --> */}
    <section class="contact">
        <div class="form-container">
            <form class="vertical-form" action="https://submit-form.com/3cMe44hPR">
                <h2>Contact Us</h2>
                <label for="first-name">First name</label>
                <input id="first-name" name="first-name" type="text" required />
                <label for="last-name">Last name</label>
                <input id="last-name" name="last-name" type="text" required />
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required />
                <label for="message">Message</label>
                <textarea id="message" name="message" cols="15" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
    

    <section class="benefits-section">
      <div class="container">
          <div class="benefit">
              <div class="icon">
                  <i class="fas fa-moon"></i>
              </div>
              <h3>No More Late Night Disposals</h3>
              <p>Students no longer need to come out late at night to dispose of their garbage. Throwaydotty has got you covered.</p>
          </div>
          <div class="benefit">
              <div class="icon">
                  <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Avoid Issues with Waste Taskforce</h3>
              <p>Our customers will no longer have issues with the waste management taskforce of Rivers State over disposing dirt at the wrong time. We have you covered.</p>
          </div>
          <div class="benefit">
              <div class="icon">
                  <i class="fas fa-walking"></i>
              </div>
              <h3>No More Long Walks with Heavy Garbage</h3>
              <p>Our clients no longer need to walk long distances carrying heavy garbage to dispose of it. Let us handle it for you.</p>
          </div>
      </div>
  </section>
 
  <section class="pickup-section">
    <div class="container">
        <h2>Convenient and Safe Waste Disposal</h2>
        <p>Experience the ultimate convenience with Throwaydotty's no-contact payment options, 
            virtual estimates, and 100% touchless pickup services. Your safety and satisfaction are our top priorities.</p>
        <a href="#" class="btn">Request for a Pickup</a>
    </div>
</section>
<footer class="site-footer">
  <div class="container">
      <div class="footer-logo">
          <img src="DOTTY white.png" alt="Throwaydotty Logo"/>
      </div>
      <div class="footer-column">
          <h3>Get in Touch</h3>
          <p><img src="https://img.icons8.com/fluent/16/000000/phone.png" alt="Phone Icon"/> +234-8119951308</p>
          <p><img src="https://img.icons8.com/fluent/16/000000/email.png" alt="Email Icon"/> samuelchimdidibiah@gmail.com</p>
          <div class="social-icons">
              <a href="#"><img src="https://img.icons8.com/fluent/16/000000/facebook-new.png" alt="Facebook Icon"/></a>
              <a href="#"><img src="https://img.icons8.com/fluent/16/000000/instagram-new.png" alt="Instagram Icon"/></a>
              <a href="#"><img src="https://img.icons8.com/fluent/16/000000/twitter.png" alt="Twitter Icon"/></a>
          </div>
      </div>
      <div class="footer-column">
          <h3>Other Services</h3>
          <ul>
              <li>Clinical Garbage Disposal</li>
              <li>Deep Well Disposal Removal</li>
              <li>Health and Biohazardous Waste</li>
              <li>Industrial Cleaning</li>
              <li>Roll of Dumpster Service</li>
              <li>Zero Waste Service</li>
          </ul>
      </div>
      <div class="footer-column">
          <h3>Subscribe To Our Newsletter</h3>
          <form class="subscribe-form">
              <div class="form-group">
                  <input type="text" placeholder="Name" required/>
              </div>
              <div class="form-group">
                  <input type="email" placeholder="Email" required/>
              </div>
              <button type="submit" class="btn">Subscribe</button>
              <button type="submit" class="btn">UnSubscribe</button>
          </form>
      </div>
  </div>
</footer>
  </div>
);

// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Top_bar />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();