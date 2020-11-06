import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Images/Astronaut.svg"


const Home = () => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="brand-name text-info">
                                    Safari kid
                            </h1>
                                <h2 className="text2">
                                    Bandra Preschool & Child Care
                            </h2>
                                <div className="mt-3" >
                                    <NavLink to="/contact" className="btn btn-outline-primary btn-lg"> Contact Us </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img floating">
                                <img src={web} className="img-fluid" alt="home image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Home;