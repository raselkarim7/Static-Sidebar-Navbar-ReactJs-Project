import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarMenuWrapper from './NavBarMenuWrapper';


class NavBar extends Component {
  render() {
    return (   
      <div className="main-navbar">      
      <nav className="navbar default-layout-navbar  col-12 p-0  d-flex flex-row mb-1 ">    
        <div className="navbar-searchbox d-flex align-items-center justify-content-center ml-4 ">
            <img src="../../images/searchicon1.png" alt='Serch Icon' width="20" />
            <input 
                className="text-line-searchfield" 
                placeholder="Search anything you like"
            /> 
        </div>   

        <NavBarMenuWrapper />   

      </nav>    
      </div>
    );
  }
}

export default NavBar;
