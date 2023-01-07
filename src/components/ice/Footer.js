import React from 'react';
import { Link }  from 'react-router-dom';
function Footer(){
    return(
        <section className="bg-dark text-white py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <h6>Company Info</h6> 
                       <hr/>
                       <p>
                            "Lorem ipsum dolor sit amet,Consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-md-4">
                       <h6>Quick Link</h6> 
                       <hr/>
                       <div><Link to="/" className="text-decoration-none">Home</Link></div>
                       <div><Link to="/about" className="text-decoration-none">About Us</Link></div>
                       <div><Link to="/contant" className="text-decoration-none">Contant Us</Link></div>
                       <div><Link to="/" className="text-decoration-none">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                       <h6>Contant Information</h6> 
                       <hr/>
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