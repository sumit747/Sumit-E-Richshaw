import React from "react";
import Slider1 from '../images/auto.webp';
import Slider2 from '../images/auto1.jpg';
import Slider3 from '../images/auto2.webp';
import Slider4 from '../images/auto3.png';

// import { Link } from 'react-router-dom'

function Slider(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" height= "600px" alt="Nice"/>
    </div>
    <div class="carousel-item">
      <img src={Slider2} class="d-block w-100" height= "600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" height= "600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider4} class="d-block w-100" height="600px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Slider;