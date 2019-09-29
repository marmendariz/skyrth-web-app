import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import './HomeView.scss';
import AppViewTitle from '../../shared/app-view-title';

import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

class HomeView extends React.Component{
  render(){
    // const [index, setIndex] = useState(0);
    // const [direction, setDirection] = useState(null);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    //   setDirection(e.direction);
    // };

    return (
    <div id="home-view">
      <AppViewTitle>Home</AppViewTitle>

      {/* <Carousel> activeIndex={index} direction={direction} onSelect={handleSelect}> */}

      <Grid id="grid-wrapper" container>
        <Grid item xs={12}>
        <Carousel id="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/200x200.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://via.placeholder.com/200x200.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/200x200.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        </Grid>
          {/* <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul className="footer-section-list">
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid> */}
        </Grid>

    </div>);
  }
}
export default HomeView;