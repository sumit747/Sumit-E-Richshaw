import React, { Component } from "react";
import Slider from "../ice/Slider";
import Mv from "./includes/Mv"
import Footer from "../ice/Footer";

class Home extends Component{
    render(){
        return(
            <div>
                <Slider />
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Our Company</h4>
                                <div className="under-line mb-1"></div>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Mv/>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                         <div className="col-md-12">
                            <h4>Our Services</h4>
                            <div className="under-line mb-1"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                            <h6>Digital Markting</h6>
                                            <div className=" mb-1 sub-underline"></div>
                                            <p>
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                            </p>
                                    </div>
                                </div>           
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-body">
                                            <h6>Web Designing</h6>
                                            <div className=" mb-1 sub-underline1"></div>
                                            <p>
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                            </p>
                                    </div>
                                </div>           
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-body">
                                            <h6>Developement</h6>
                                            <div className=" mb-1 sub-underline2"></div>
                                            <p>
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                            </p>
                                    </div>
                                </div>           
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home;