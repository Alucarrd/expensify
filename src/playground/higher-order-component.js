//Higher Order Component -> or hoc
//an component that render another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is {props.info}</p>
  </div>

);
const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
        <p>This is private info. please dun't share</p>
        <WrappedComponent {...props}/>
      </div>
    )
}

//require authentication

const RequireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>You have been authencated</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here are the details"/>, document.getElementById('app'));
//ReactDOM.render(<AppRouter />, document.getElementById('app'));
