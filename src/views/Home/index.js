import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

import Login from './Login';
import SignUp from './SignUp';

export default function Home() {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      if(location.pathname === "/") return history.push('/sign-up');
      else return false;
    }, []);

    return(
      <>
        <Switch>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>    
      </>
    );
}