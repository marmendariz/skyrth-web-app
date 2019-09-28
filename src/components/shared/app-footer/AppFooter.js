import React from 'react';
import './AppFooter.scss';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
const AppName = process.env.REACT_APP_NAME;
const CompanyName = process.env.REACT_APP_COMPANY_NAME;
const CopyrightYear = process.env.REACT_APP_COPYRIGHT_YEAR;

class AppFooter extends React.Component{
  render(){
    return (
      <div id="app-footer">
        <Grid id="grid-wrapper" container>
          <Hidden smDown>
            <Grid item md={2}></Grid>
          </Hidden>
          <Grid item xs={12} sm={6} md={2}>
            <h5 id="company-name">{AppName}</h5>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul className="footer-section-list">
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul className="footer-section-list">
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
              <li><a href="#">Link </a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <h5 className="footer-section-title">Section Title</h5>
            <ul className="footer-section-list">
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
        <section id="footer-bottom-section">
          <p>&copy; {CopyrightYear} Copyright <span className="text-highlight">{CompanyName}</span></p>
          <p>Designed By <a className="text-highlight">Mark Armendariz</a></p>
        </section>
      </div>
      );
  }
}
export default AppFooter;