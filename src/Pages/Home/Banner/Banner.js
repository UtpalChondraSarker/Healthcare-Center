import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from  '../../../image/banner/men-with-protection.jpg3.jpg1 (2).jpg'
import banner2 from  '../../../image/banner/flat-hand-drawn-hospital.jpg2 (2).jpg'
import banner3 from  '../../../image/banner/healthcare-medical-concept.jpg1 (2).jpg'

const Banner = () => {
    return (
        <>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Meet Our Doctor's Team</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>Meet Our Doctor's Team</h1>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Meet Our Doctor's Team</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
        
    );
};

export default Banner;