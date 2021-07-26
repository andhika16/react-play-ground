import React from 'react';
import Button from './Button';
import '../script.js'

import './Navbar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const Navbar = () =>
    {

    const navside = () => {
        const menuToggle = document.querySelector('.menu-toggle input');
        const nav = document.querySelector('nav ul');
        
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('slide');
        })
    }
    
    
    return (
        <>
            <nav>

                <Router >
                    <div className="logo">
                        <h4>We Care</h4>
                    </div>
                    <ul >
                        <li>
                            <Link to=''  className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to='' className='link'>Features</Link>
                        </li>
                        <li>
                            <Link to='' className='link'>FInd Doctor</Link>
                        </li>
                        <li>
                            <Link to='' className='link'>Fasilities</Link>
                        </li>
                    <Button title="Find" />
                    </ul>
                    <div className="menu-toggle">
                        <input type="checkbox" onClick={() =>  navside() }/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Router>
            </nav>
           

        </>
    );

}
 
export default Navbar;