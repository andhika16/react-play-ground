import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
  import './Sidenav.css'
const Sidenave = () => {
    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    // }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return (
        <>
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
 
export default Sidenave;