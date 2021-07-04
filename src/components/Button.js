import React from 'react';
import './Button.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Button = ({size,title}) => {
    return (
         <>
            <Router> 
                <Link type="button" className={ size ? "button-medium" : "button"} to="#">{title}</Link>
            </Router>
        </>
     );
}
 
export default Button;