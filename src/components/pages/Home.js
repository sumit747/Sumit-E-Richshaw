import React from "react";
import Slider from "../ice/Slider";
import Mv from "./includes/Mv"
import Footer from "../ice/Footer";

function Home() {
    return (
        <div>
            <Slider />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Company</h4>
                            <div className="under-line mb-1"></div>
                            {/* <p>
                                As an AI language model,
                                I don't have access to real-time information or knowledge about specific companies unless they are widely known.
                                Therefore, I can't provide you with the current status of your company in the electric autorickshaw industry.
                                </p> */}
                            <p>
                                However, I can give you some general information about the electric autorickshaw industry.
                                In recent years, there has been a growing interest in electric vehicles, including autorickshaws or tuk-tuks.
                                Electric autorickshaws offer numerous advantages over their traditional gasoline-powered counterparts,
                                such as reduced emissions, lower operating costs, and quieter operation.
                            </p>
                            <p>
                                Many countries and cities around the world have been encouraging the adoption of electric vehicles,
                                including autorickshaws, as part of their efforts to reduce air pollution and combat climate change.
                                Governments often provide incentives and subsidies to promote the purchase and use of electric vehicles,
                                which can create business opportunities for companies operating in this industry.
                            </p>
                            <p>
                                To assess the status of your company in the electric autorickshaw market,
                                you would need to evaluate factors such as your market presence, product offerings, customer base, financial performance, competition,
                                and any partnerships or collaborations you have established.
                                It's important to conduct a comprehensive analysis of your company's strengths, weaknesses, opportunities,
                                and threats to understand your position in the industry and identify areas for improvement.
                            </p>
                            <p>
                                Consider consulting with industry experts, conducting market research,
                                and analyzing relevant data to gain insights into the current market trends, customer preferences, and regulatory landscape.
                                This information can help you make informed decisions and develop strategies to thrive in the electric autorickshaw industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv />

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
export default Home;