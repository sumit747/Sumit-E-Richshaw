import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <section className="bg-dark text-white py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr />
                        <p>
                            If you're looking for information about a particular electric autorickshaw company,
                            I recommend conducting an online search or referring to industry reports, business directories,
                            or news sources that specialize in the electric vehicle or automotive industry.
                            These sources should provide you with the latest information on companies operating in the electric autorickshaw
                            sector, including their products, services, market presence, and other relevant details.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Link</h6>
                        <hr />
                        <div><Link to="/" className="text-decoration-none">Home</Link></div>
                        <div><Link to="/about" className="text-decoration-none">About Us</Link></div>
                        <div><Link to="/contant" className="text-decoration-none">Contant Us</Link></div>
                        <div><Link to="/" className="text-decoration-none">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contant Information</h6>
                        <hr />
                        <div><p>House no 45, Basti, Uttra Pardesh, India</p></div>
                        <div><p>+91- 9118094888, 6752426729</p></div>
                        <div><p>Email id = sumit@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;