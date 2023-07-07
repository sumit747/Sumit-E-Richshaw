import React, { useEffect, useState } from "react";
// import Mv from "./includes/Mv";
import Footer from "../ice/Footer";
function Contact() {
    return (
        <div>
            <section>
                <div className="py-3 text-center bg-danger">
                    <h2 className="text-white">Contact Us</h2>
                </div>
            </section>
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <iframe title="This the Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56985.22172983401!2d82.16414808062122!3d26.789770894057757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1659852116342!5m2!1sen!2sin"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>Please Share Your Idia</h4>
                                    <div className="under-line mb-1"></div>
                                    <form>
                                        <label >Name</label>
                                        <input type="text" name="name" placeholder="Please Enter your Name" required className="form-control mb-2" />
                                        <label >Email</label>
                                        <input type="text" placeholder="Please Enter your Email" required className="form-control mb-2" />
                                        <label >Number</label>
                                        <input type="text" mobile="mobile" placeholder="Enter your Contant Nunber" required className="form-control mb-2" />
                                        <label>Message</label>
                                        <textarea rows="3" className="form-control mb-2" required ></textarea>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
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
export default Contact;