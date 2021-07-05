import React from 'react';
import Button from './Button';

import './Sidenav.css'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const Navbar = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                    <Router>
                        <Link  className="navbar-brand" to="#">Navbar</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button> */}
                    <button className="navbar-toggler" onClick={()=> openNav()}>
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                   
                        <div className="collapse navbar-collapse text-center" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Find Doctor</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Fasilities</Link>
                                </li>
                            </ul>
                        <Button title='Follow Us' />
                        </div>
                    </Router >
            </nav>
            <div id="mySidenav" className="sidenav">
                        <Router >
                                <Link className="closebtn" onClick={() => closeNav()}>&times;</Link>
                                <Link to="#">Home</Link>
                                <Link to="#">Features</Link>
                                <Link to="#">Find Doctor</Link>
                                <Link to="#">Fasilities</Link>
                        </Router>
                    </div>

                <div id="main">
                
                </div>


        </>
     );
}
 
export default Navbar;