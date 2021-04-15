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
import NewtonRaphson from './components/RootOfEquation/NewtonRaphson';

import CramersRule from './components/LinearAlgebra/CramersRule';
import GaussElimination from './components/LinearAlgebra/GaussElimination';

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
          <Route exact path="/NewtonRaphson" component={NewtonRaphson} />
          <Route exact path="/CramersRule" component={CramersRule} />
          <Route exact path="/GaussElimination" component={GaussElimination} />
        </BrowserRouter>
        </div>
      </div>
    )
  }
}
export default App;