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


const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/recover" component={Recover} exact />
        <Route path="/reset" component={Reset} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
