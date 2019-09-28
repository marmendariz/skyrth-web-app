import React from 'react';
import {Helmet} from 'react-helmet';
import './HomeView.scss';

const title = "Home | Skyrth";

class HomeView extends React.Component{
  render(){
    return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
        Home
    </div>);
  }
}
export default HomeView;