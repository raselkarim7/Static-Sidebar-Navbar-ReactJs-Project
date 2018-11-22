import React, { Component } from 'react';
import SidebarView from './common/SidebarView';
import NavBar from './common/NavBar'; 

class Analytics extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <SidebarView selected="/analytics" />
        <div id="page-content-wrapper " className="">
          <NavBar />
          <div className="container-fluid ">
            
            <h1>Analytics</h1>
            <p>
              "Here all suspicion needs must be abandoned,
               <br />
               All cowardice must needs be here extinct."
              <br /><br />
              There is no one who loves pain itself, who seeks after it and wants to have it, 
              simply because it is pain. <br />

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> 
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Analytics ; 
