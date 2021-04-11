import React, {
  Component
} from 'react';
import './App.css';
import './index.css';
// Router
import {
  Route,
  BrowserRouter
} from 'react-router-dom';

//import Components and Pages

import Home from './components/Home';
import Bisection from './components/RootOfEquation/Bisection';
import FalsePos from './components/RootOfEquation/FalsePosition';
import OnePoint from './components/RootOfEquation/OnePointIteration';
import Secant from './components/RootOfEquation/SecantMethod';


class App extends Component {

  render() {
    return (
      <div>
        <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/Bisection" component={Bisection} />
          <Route exact path="/FalsePos" component={FalsePos} />
          <Route exact path="/OnePoint" component={OnePoint} />
          <Route exact path="/Secant" component={Secant} />
        </BrowserRouter>
        </div>
      </div>
    )
  }
}
export default App;