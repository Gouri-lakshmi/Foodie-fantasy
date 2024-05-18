"use client"
import React, { useEffect, useState } from 'react'

const SliderBlock = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Move to the next slide
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 slides
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={currentSlide === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={currentSlide === 1 ? "active" : ""} aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={currentSlide === 2 ? "active" : ""} aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
         <img src="./dinner.webp" className="d-block w-100" style={{height:"600px"}} alt="Burger" />
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
            <img src="./greek-salad.jpg" className="d-block w-100" alt="Meal" style={{height:"600px"}} />
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
            <img src="./drinks.jpg" className="d-block w-100" alt="Drinks" style={{height:"600px"}} />
          </div>      
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => setCurrentSlide((currentSlide - 1 + 3) % 3)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => setCurrentSlide((currentSlide + 1) % 3)}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default SliderBlock