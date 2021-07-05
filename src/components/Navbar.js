import React from 'react';
import Button from './Button';

import './Sidenav.css'
import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = ({sidenav}) => {

<<<<<<< HEAD
  

=======
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
>>>>>>> test
    return (
        <>
 
            <nav className="navbar navbar-expand-lg">
            <div class="container"> 
                        <Link  className="brand fw-bold" to="#"><i class="fas fa-clinic-medical"></i>WeCare</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button> */}
                    <button className="navbar-toggler" onClick={sidenav()}>
                        <i class="fas fa-bars"></i>
                    </button>
<<<<<<< HEAD
=======
                   
>>>>>>> test
                        <div className="collapse navbar-collapse text-center" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/doctorPage">Find Doctor</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Fasilities</Link>
                                </li>
                            </ul>
                        <Button title='Follow Us' />
<<<<<<< HEAD
                    </div>
                </div>         
                </nav>
=======
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


>>>>>>> test
        </>
     );
}
 
export default Navbar;