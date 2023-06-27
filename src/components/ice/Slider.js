import React from "react";
import Slider1 from '../images/e-auto.webp';
import Slider2 from '../images/e-auto1.jpg';
import Slider3 from '../images/e-auto2.webp';
import Slider4 from '../images/e-auto3.jpg';

// import { Link } from 'react-router-dom'

const Slider =()=>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider1} alt="Nice"/>
    </div>
    <div className="carousel-item">
      <img src={Slider2} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider3}   alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slider4} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Slider;