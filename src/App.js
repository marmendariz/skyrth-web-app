import React from 'react';
import 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* UI Imports */
import './App.scss';
import AppNavBar from './components/shared/app-nav-bar';
import AppFooter from './components/shared/app-footer';

/* View Components */
import HomeView from './components/views/home-view';
import LoginView from './components/views/login-view';
const DashboardView = () => <h2>Dashboard</h2>;

class App extends React.Component {
  render() {
    return (
      <div id="app-wrapper">
        <div className="row">
          <div id="nav-bar-wrapper" className="col s12">
            <AppNavBar></AppNavBar>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <Router>
                <main className="col s12" id="app-content">
                  <Switch>
                    <Route path='/' exact component={HomeView}></Route>
                    <Route path='/login' exact component={LoginView}></Route>
                    <Route path='/dashboard' exact component={DashboardView}></Route>
                  </Switch>
                </main>
              </Router>
            </div>
          </div>
        </div>
        <div id="footer-wrapper">
          <AppFooter id="app-footer"></AppFooter>
        </div>
      </div>
    );
  }
}

export default App;
