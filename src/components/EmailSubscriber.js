import React, { Component } from 'react';
import SidebarView from './common/SidebarView';
import NavBar from './common/NavBar'; 

class EmailSubscriber extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <div id="wrapper" className="toggled">
        <SidebarView selected="/emailsubscriber" />
        <div id="page-content-wrapper " className="">
          <NavBar />
          <div className="container-fluid ">
            
            <h1>EmailSubscriber</h1>
            <p>This template has a responsive menu toggling system. The mnu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default EmailSubscriber ; 
