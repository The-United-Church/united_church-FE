import React from "react";
import "./styles/header.css";
import { BiMenu } from "react-icons/bi";
import { FaBell, FaCog, FaQuestionCircle } from 'react-icons/fa';
import store from "../utilities/state_manager/store";

const Header = () => {
  
  return (
    <div className='headerContainer'>
      <div className="logoContainer">
        <div className="menuBarStyle" onClick={()=>store.dispatch({type: "expandMenu"})}><BiMenu></BiMenu></div>
        {/* <div><img className="logoSizing" src={require('../assets/images/logo.png')} alt="FernCot"/></div> */}
        <div>The United Church</div>
        {/* <div><img className="logoNameSizing" src={require('../assets/images/logoname.png')} alt="FernCot"/></div> */}
      </div>
      <div className="otherMenuNavContainer">
        <FaBell className="headerIcons" />
        <FaCog className="headerIcons" />
        <FaQuestionCircle className="headerIcons" />
        <div className="headerProfile">LM</div>
      </div>
    </div>
  );
};

export default Header;