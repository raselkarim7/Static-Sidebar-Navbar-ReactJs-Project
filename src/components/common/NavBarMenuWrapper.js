import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarMenuWrapper extends Component {
  render() {
    return (
        <div className="navbar-menu-wrapper d-flex align-items-stretch mr-4 ">
            <div className="nav-item d-flex align-items-center mx-1 ">
                <div> 
                   <Link className="nav-link" to='#'> 
                     <i className="far fa-comments" />
                     <span className="count-symbol bg-warning" />
                   </Link>
                </div>
            </div>
            <div className="nav-item d-flex align-items-center mx-2">
                <div>
                   <Link className="nav-link" to='#'> 
                     <i className="fas fa-bell" />
                     <span className="count-symbol bg-danger" />
                   </Link>
                </div>
            </div>

            <div className=" d-flex align-items-stretch"> 
                <div className="border my-2 mr-2" /> 
            </div>

            <div className="nav-item nav-profile dropdown mx-1 row  d-flex align-items-center">
                <div className="dropdown ">
                    <Link 
                        className=" dropdown-toggle " to="#" role="button" id="dropdownMenuLink" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    >
                        Raj Kapoor
                    </Link>
                    <div 
                        className="dropdown-menu dropdown-menu-right show-will-work" 
                        aria-labelledby="dropdownMenuLink"
                    >
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Another action</Link>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                </div>
                <Link 
                    className="nav-link" id="profileDropdown" to="#" data-toggle="dropdown" 
                    aria-expanded="false"
                >
                    <div className="nav-profile-img ml-1">
                        <img 
                            width="30"
                            src="../../images/faces/face2.jpg" 
                            alt="profile pic"  
                            className="rounded-circle"
                        />
                        <span className="availability-status online" />      
                    </div>
                </Link>
            </div>
        </div> 
    );
  }
}

export default NavBarMenuWrapper; 
