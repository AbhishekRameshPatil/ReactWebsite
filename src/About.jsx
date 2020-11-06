import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Images/growth.svg"
import img1 from "../src/Images/img1.jpg"
import img2 from "../src/Images/img2.jpg"
import img3 from "../src/Images/img3.jpg"
import img4 from "../src/Images/img4.jpg"
import img5 from "../src/Images/img5.jpg"
import img6 from "../src/Images/img6.jpg"




const About = () => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid about_text">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="brand-name text-info">
                                    About Us
                            </h1>
                                <p className="">
                                    he future belongs to people who will be able to marry high creativity and imagination with a hunger for knowledge and learning. We believe that the best way of developing these in young children is a combination of free and structured play, in beautiful and engaging preschool learning environments, and a program that constantly develops their minds across multiple areas. We know that children develop at different rates across different areas. At Safari Kid international kindergartens, we ensure that a child is advancing at their pace and level, not that of the group. We also believe that play is the best way to learn – even if you’re learning advanced concepts in languages or math. That’s why our play-based nursery approach ensures that each Safari Kid is at least one (if not two) grade levels ahead of their peers when they leave us for primary school.
                            </p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img floating">
                                <img src={web} className="img-fluid" alt="About image" />
                            </div>
                        </div>
                        < h1 className="brand-name text-info text-center">
                            Our Gallery
                            </h1>
                        <div className="container">
                            <div className="row image-gallery">
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img1} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img3} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img4} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img5} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-6">
                                    <div className="thumbnail">
                                        <img src={img6} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer id="footer" className="pt-5 px-3">
                <div className="row bg-light py-5">
                    <div className="col-sm-4 my-5 text-center">
                        
                            </div>
                    <div className="col-sm-4 my-4 text-center">
                        <div className="footer-title">
                            <p className="description font-os font-size-16 text-black-50 text-uppercase">Crafted By</p>
    
                                <h1 className="brand-name text-info">
                                    Safari kid
                            </h1>
                        </div>
                    </div>
                </div>
            </footer>
    </>
    );
};

export default About;