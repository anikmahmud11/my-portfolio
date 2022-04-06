import React from 'react';
import { Button } from 'react-bootstrap';
import './ContactMe.css'
const ContactMe = () => {
    return (
        <div id="contact">
            <div className="container pt-5">
                <p className="t-shadow">SAY HELLO</p>
                <br/>
                <h3 className="t-shadow">CONTACT</h3>
            </div>
            <div className="text-center p-4 ">
                <h5 className="t-shadow">Contact Form</h5>
            <form className=" form-style container p-5 w-100 shadow " action="https://formsubmit.co/mzmahmudanik@gmail.com" method="POST">
               <div className="d-flex justify-content-between">
               <input className="w-50 input m-1"  type="email" name="email" placeholder="Email Address" required />
                <input className="w-50 input m-1" type="text" name="name" placeholder="Name" required />
               </div>
                <br />
                <br />
                <input className="w-100 input" type="text" name="_subject" placeholder="Subject" />
                <br />
                <br />
                <input className="w-100 h-100 input" type="text" name="message" placeholder="Write your message..." required />
                <br />
                <br />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <Button className="resume-btn" type="submit">Submit</Button>
            </form>
        </div>
        </div>

    );
};

export default ContactMe;