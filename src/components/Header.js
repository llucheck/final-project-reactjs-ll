import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Yatzhee from './Yatzhee.js'
import RegEx from './RegEx.js'
import Home from './Home'


function Header() {
  return (
    <Router>
      <header>
      <div class="sidenav">
      <Link to="/">Home</Link>
      <Link to="/Yatzhee">Yatzhee</Link>
      <Link to="/RegEx">Regex Validator</Link>
      </div>
      </header>
      <Switch>
          <Route path="/Yatzhee"> <Yatzhee /> </Route>
          <Route path="/RegEx"> <RegEx /> </Route>
          <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  );
}


export default Header;