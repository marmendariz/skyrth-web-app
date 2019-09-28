import React from 'react';
import './LoginView.scss';
import AppLogin from '../../shared/app-login';
import AppViewTitle from '../../shared/app-view-title';

class LoginView extends React.Component{
  render(){
    return(
      <div>
        <AppViewTitle>Login</AppViewTitle>
        Login View
        <AppLogin></AppLogin>
      </div>
    );
  }
}
export default LoginView;