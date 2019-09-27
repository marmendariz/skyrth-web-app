import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonAppBar from './shared-components/app-nav-bar';
import Footer from './shared-components/footer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Grid container space={3}>
          <Grid item xs={12}>
            {/* <NavBar></NavBar> */}
            <ButtonAppBar></ButtonAppBar>
          </Grid>
          <Grid item xs={12}>
            <main id="test">
            </main>
          </Grid>
          <Grid item xs={12}>
            <Footer id="app-footer"></Footer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
