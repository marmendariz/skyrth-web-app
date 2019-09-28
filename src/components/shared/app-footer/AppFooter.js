import React from 'react';
import './AppFooter.scss';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class AppFooter extends React.Component{
  render(){
    return (
      <div id="app-footer">
        <Grid id="grid-wrapper" container>
          <Hidden smDown>
            <Grid item md={2}></Grid>
          </Hidden>
          <Grid item xs={12} sm={6} md={2}>
            <h5 id="company-name">Skyrth</h5>
            {/* <p>"At vero eos et accusamus et iusto odio dignissimos 
              ducimus qui blanditiis praesentium voluptatum deleniti 
              atque corrupti quos dolores et quas molestias excepturi 
            </p> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Hidden smDown>
            <Grid item xs={2}></Grid>
          </Hidden>
        </Grid>
        <section id="copyright">
          <p>&copy; 2019 Copyright <span className="text-highlight">Skyrth, LLC.</span></p>
          <p>Designed By <a className="text-highlight">Mark Armendariz</a></p>
        </section>
      </div>
      );
  }
}
export default AppFooter;