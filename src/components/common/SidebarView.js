import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  SidebarItem from './SidebarItem'; 

class SidebarView extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { selected } = this.props;
    return (
      <div id="sidebar-wrapper" >
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="#">
                <span className="text-white">Static Sidebar Navbar</span>
            </Link>
          </li>
          <SidebarItem link="/" title="Dashboard" faIcon="fas fa-chart-bar" selected={selected}/>
          <SidebarItem link="/issuenotification" title="Issue Notification" faIcon="fas fa-home" selected={selected}/>
          
          <SidebarItem link="/configappparameters" title="Config App Parameters" faIcon="fas fa-align-justify" selected={selected}/>
          <SidebarItem link="/register" title="Register" faIcon="far fa-address-book" selected={selected}/>
          
          <SidebarItem link="/authorize" title="Authorize" faIcon="fas fa-globe" selected={selected}/>
          <SidebarItem link="/configsystemsettings" title="Config System Settings" faIcon="fas fa-cog" selected={selected}/>
          
          <SidebarItem link="/accounting" title="Accounting" faIcon="fas fa-money-check-alt" selected={selected}/>
          <SidebarItem link="/promotionmanagement" title="Promotion Management" faIcon="fas fa-door-open" selected={selected}/>
          
          <SidebarItem link="/emailsubscriber" title="Email Subscriber" faIcon="far fa-envelope" selected={selected}/>            
          <SidebarItem link="/analytics" title="Analytics" faIcon="fas fa-chart-line" selected={selected}/>
          
          <SidebarItem link="/fraudmanagement" title="Fraud Management" faIcon="fas fa-brain" selected={selected}/>
        </ul>
      </div>
    );
  }
};

export default SidebarView;