import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Hello from './Hello';
import Navbar from './Navbar';




const App = () => { 
  return (
      <Router>
        <div>
          <Navbar />
          <br />
          <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/hello">
                <Hello />
              </Route>
                          
          </Switch>
        </div>
      </Router>
  );
};

export default App;
