import React from 'react';
import 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* UI Imports */
import './App.scss';
import ButtonAppBar from './components/shared/app-nav-bar';
import AppFooter from './components/shared/app-footer';
import Grid from '@material-ui/core/Grid';

/* View Components */
import HomeView from './components/views/home-view';
import LoginView from './components/views/login-view';
const DashboardView = () => <h2>Dashboard</h2>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app-wrapper">
          <Grid container space={3}>
            <Grid item xs={12}>
              <ButtonAppBar></ButtonAppBar>
            </Grid>
            <Grid item xs={12}>
              <main id="app-content">
                <Switch>
                  <Route path='/' exact component={HomeView}></Route>
                  <Route path='/login' exact component={LoginView}></Route>
                  <Route path='/dashboard' exact component={DashboardView}></Route>
                </Switch>
              </main>
            </Grid>
            <Grid item xs={12}>
              <AppFooter id="app-footer"></AppFooter>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
