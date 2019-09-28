import React from 'react';
import Helmet from 'react-helmet';
const AppName = process.env.REACT_APP_NAME;

export default function AppViewTitle(props) {
  return (
    <Helmet><title>{props.children} | {AppName}</title></Helmet>
  );
}