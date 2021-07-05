import React from 'react';
import './Section.css'
const Section = () => {


    return (
        <>
            {/* <DoctorPage */}
            <div id="section">

                    <h1 className="fw-bold text-center">Quick Section For Scheduling <br /> For Doctor</h1>
                    <div className="row mt-5 content">
                            <div className="col-sm-4 col-md-3 col-lg-3 box">
                                <i className="fa fa-user-circle " style={{backgroundColor : '#FFEFF2', color : '#FF5E7E'}} aria-hidden="true"></i>
                                <h6 className="fw-bolder">Find Doctor</h6>
                        <p className="lh-sm mt-2">Lorem ipsum dolor sit amet Lorem ipsum Lorem ipsum dolor sit amet.</p>
                        <span >See more</span>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-3 box">
                                <i className="fa fa-calendar" style={{backgroundColor : '#F4FDFE' , color : '#0AA8C3'}} aria-hidden="true"></i>
                                <h6 className="fw-bolder">Schedule Appointment</h6>
                        <p className="lh-sm mt-2">Lorem Lorem ipsum dolor sit amet, consectetur.tempore. consectetur.tempore</p>
                        <span >See more</span>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-3 box">
                        <i className="fa fa-check-square " style={{ backgroundColor: '#E9F3FD', color: '#288CEE'}} aria-hidden="true"></i>
                                <h6 className="fw-bolder">Get Your Solustion</h6>
                        <p className="lh-sm mt-2">Lorem ipsum, dolor sit amet consectetur Vaperiam!. Lorem ipsum dolor sit amet.</p>
                        <span >See more</span>
                            </div>
                            
                        </div>
            </div>
            <div id="section2">

                <h1 className="fw-bold text-center">Meet Our Great Doctor</h1>
                <span className="paraghrap">
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus est ab sit voluptates tempore fugiat ipsum illum facere corrupti, dolorem ullam reprehenderit cumque harum explicabo dolorum, magnam nam praesentium!</p>
                </span>
                    <div className="row mt-2 content">
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <img className="img-thumbnail shadow-sm mb-2" src="img/5.png" alt=""/>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <img className="img-thumbnail shadow-sm mb-2" src="img/6.png" alt=""/>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <img className="img-thumbnail shadow-sm mb-2" src="img/8.png" alt=""/>
                            </div>
                            
                        </div>
                </div>
        </>
     );
}
 
export default Section;