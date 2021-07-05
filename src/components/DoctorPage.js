import React from 'react';
import Button from './Button';
const DoctorPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Consultation With Your Doctor Any Where Any Time</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sequi cum numquam ad nesciunt quaerat recusandae eaque dicta. Assumenda, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.
                    </p>
                    <Button title='Add Apointment' />
                </div>
                <div className="col">
                    <img src="img/3.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default DoctorPage;