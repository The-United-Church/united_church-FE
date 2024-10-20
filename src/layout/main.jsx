import React from "react";
import "./styles/main.css";
import Header from "./header";
import Sidebar from "./sidebar";
import PageContainer from "./pagecontainer";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <Header></Header>
      </div>
      <div className="main-sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="main-content">
        <PageContainer></PageContainer>
      </div>
    </div>
  );
};

export default Main;