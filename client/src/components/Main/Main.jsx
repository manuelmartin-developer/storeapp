// Imports
import React from "react";
import { Route, Switch } from 'react-router-dom';

import Error from '../Error';
import Home from '../Home';
import Details from '../Details';
import Cart from '../Cart';
import Login from '../Login';
import Signup from '../Signup';
import Recover from '../Recover';
import Reset from '../Reset';
import Logout from "../Logout/Logout";
import Update from "../Update/Update";


const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/update/:id" component={Update} exact />
        <Route path="/login:token?" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/recover" component={Recover} exact />
        <Route path="/reset:id:token" component={Reset} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
