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
import Form from './components/Form';
import Benefits from './components/Benefits';
// import { Top_bar } from './top_bar';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header1/>
    <Hero/>
    <About/>
    <Service/>
    <Form/>
    <Benefits/>
  
    {/* Aloni assignment 1 */}
    <section class="pickup-section">
      <div class="container">
        <h2>Convenient and Safe Waste Disposal</h2>
        <p>
          Experience the ultimate convenience with Throwaydotty's no-contact
          payment options, virtual estimates, and 100% touchless pickup
          services. Your safety and satisfaction are our top priorities.
        </p>
        <a href="#" class="btn">
          Request for a Pickup
        </a>
      </div>
    </section>

    {/* Aloni assignment 2 */}
    <footer class="site-footer">
      <div class="container">
        <div class="footer-logo">
          <img src="DOTTY white.png" alt="Throwaydotty Logo" />
        </div>
        <div class="footer-column">
          <h3>Get in Touch</h3>
          <p>
            <img
              src="https://img.icons8.com/fluent/16/000000/phone.png"
              alt="Phone Icon"
            />{" "}
            +234-8119951308
          </p>
          <p>
            <img
              src="https://img.icons8.com/fluent/16/000000/email.png"
              alt="Email Icon"
            />{" "}
            samuelchimdidibiah@gmail.com
          </p>
          <div class="social-icons">
            <a href="#">
              <img
                src="https://img.icons8.com/fluent/16/000000/facebook-new.png"
                alt="Facebook Icon"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/fluent/16/000000/instagram-new.png"
                alt="Instagram Icon"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/fluent/16/000000/twitter.png"
                alt="Twitter Icon"
              />
            </a>
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
              <input type="text" placeholder="Name" required />
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <button type="submit" class="btn">
              Subscribe
            </button>
            <button type="submit" class="btn">
              UnSubscribe
            </button>
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
