import React  from 'react';
<<<<<<< HEAD
import Sidenav from './Sidenav';
=======
import Navbar from './Navbar';
>>>>>>> test
import Button from './Button';
import './Heading.css'


const Heading = () => {
    return (
        <div className="header ">
            <div className="container">
<<<<<<< HEAD
               
=======
                <Navbar />

>>>>>>> test
                <div className="row">
                    <div className="col-sm-10 col-md-7 col-lg-7 col-texts">
                        <h1 className="fs-1 fw-bold" style={{width:'400px'}}>Protect Your Health and take care of your health</h1>
                        <div className="row">
                            <div className="col-sm-5  col-md-8 col-lg-6 col-text">
                                <i className="fa fa-calendar text-info" aria-hidden="true"></i>
                                <h5 className="fw-bolder">Make Appointment</h5>
                                <p>Lorem Lorem ipsum dolor sit amet, consectetur.tempore.</p>
                            </div>
                            <div className="col-sm-5  col-md-8 col-lg-6 col-text">
                                <i className="fa fa-user-circle text-info" aria-hidden="true"></i>
                                <h5 className="fw-bolder">Find Your Best Doctor</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum</p>
                            </div>
                            <div className="col-sm-5  col-md-8 col-lg-6 col-text">
                                <i className="fa fa-check-square text-info" aria-hidden="true"></i>
                                <h5 className="fw-bolder">Health Guarantee Forever</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur Vaperiam!.</p>
                            </div>
                            <div className="col-sm-5  col-md-8 col-lg-6 col-text">
                                <i className="fa fa-map-marker text-info" aria-hidden="true"></i>
                                <h5 className="fw-bolder">Spread In Various Places</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Fugiat, similique?</p>
                            </div>
                            
                        </div>
                        <Button size='button-medium' title='Book Now'/>
                    </div>
                        <div className="d-none d-sm-block d-sm-none d-md-block col-md-5 col-lg-5 image">
                        <img src="img/2.png" className="img-fluid" alt="" />
                        <div className="row data bg-white ms-auto fw-bold text-center ">
                        <div className="col">
                            <h2 className="text-info fw-bold">250</h2>
                            <p>Doctor</p>
                        </div>
                        <div className="col">
                            <h2 className="text-info fw-bold">15</h2>
                            <p>Circle Location</p>
                        </div>
                        <div className="col">
                            <h2 className="text-info fw-bold">20</h2>
                            <p>Surgery Room</p>
                        </div>
                        <div className="col">
                            <h2 className="text-info fw-bold">+2000</h2>
                            <p>Patient Capability</p>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>     
        </div>
           
     );
}
 
export default Heading;