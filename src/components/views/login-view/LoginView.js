import React from 'react';
import './LoginView.scss';
import AppLogin from '../../shared/app-login';
import Helmet from 'react-helmet';

const loginViewTitle = "Login | Skyrth"

class LoginView extends React.Component{
  render(){
    return(
      <div>
        <Helmet>{loginViewTitle}</Helmet>
        Login View
        <AppLogin></AppLogin>
      </div>
    );
  }
}
export default LoginView;