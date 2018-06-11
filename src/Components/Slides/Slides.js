import React, { Component } from "react";
import Carousel from 'react-bootstrap/lib/Carousel';
import './Slides.css';






class Slides extends Component {
  render() {
    return (
      <div>
        <Carousel className='slides'>
          <Carousel.Item>
            <img className='images_slide' alt="900x500" src={require('../Images/c6.jpg')} />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='images_slide'  alt="900x500" src= {require('../Images/c4.jpg')} />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='images_slide' alt="900x500" src= {require('../Images/c3.jpg')} />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </div>
    );
  }
}

export default Slides;
