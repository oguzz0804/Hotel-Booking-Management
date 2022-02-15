/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {
  BrowserRouter as 
  Route,
  Redirect
} from "react-router-dom";
import { UserContext } from '../App';

function PrivateRoute({ children, ...rest }) {

  const [user, setLoggedInUser] = useContext(UserContext);
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.state ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;