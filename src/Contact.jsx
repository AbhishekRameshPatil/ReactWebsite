import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Images/blogging.svg"


const Contact = () => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="brand-name text-info text-center">
                                    Contact Us
                            </h1>
                                <section className="contact_form ">
                                    <div className="container">
                                        <div className="contact-form row">
                                            <div className="form-field col-lg-6">
                                                <label for="name" className="label">Name</label>
                                                <input id="name" className="input-text" type="text" name="" required />
                                            </div>
                                            <div className="form-field col-lg-6">
                                                <label for="name" className="label">Email</label>
                                                <input id="email" className="input-text" type="email" name="" />

                                            </div>
                                            <div className="form-field col-lg-6">
                                                <label for="phone" className="label">Phone</label>
                                                <input id="phone" className="input-text" type="text" name="" />

                                            </div>
                                            <div className="form-field col-lg-6">
                                                <label for="Message" className="label">Message</label>
                                                <textarea id="Message" className="input-text" type="text" name="" />
                                            </div>
                                            <div className="form-field   text-center">
                                                <input className="submit-btn " value="submit" type="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img floating1">
                                <img src={web} className="img-fluid" alt="Contact image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Contact;