import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><h1><strong><i>Sumit E-Richshows</i></strong></h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><h5><strong>Home</strong></h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about"><h5><strong>About</strong></h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><h5><strong>Contact Us</strong></h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Support"><h5><strong>Support</strong></h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registration"><h5><strong>Enquiry</strong></h5></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;