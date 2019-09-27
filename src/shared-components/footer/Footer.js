import React from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';

class Footer extends React.Component{
  render(){
    return (
      <div id="app-footer">
        <Grid id="grid-wrapper" container>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <h5 id="company-name">Skyrth</h5>
            {/* <p>"At vero eos et accusamus et iusto odio dignissimos 
              ducimus qui blanditiis praesentium voluptatum deleniti 
              atque corrupti quos dolores et quas molestias excepturi 
            </p> */}
          </Grid>
          <Grid item xs={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <section id="copyright">
          <p>&copy; 2019 Copyright <span className="text-highlight">Skyrth, LLC.</span></p>
          <p>Designed By <a className="text-highlight">Mark Armendariz</a></p>
        </section>
      </div>
      );
  }
}
export default Footer;