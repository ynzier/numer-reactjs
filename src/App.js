import React, { Component } from 'react';
import './App.css';

// Router
import { Route } from 'react-router-dom';

//import Components and Pages

import Home from './components/Home'
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า
import Bisection from './components/Bisection'
import FalsePos from './components/FalsePosition'
import BisectionAPI from './api/BisectionAPI'
class App extends Component {


  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Bisection" component={Bisection} />
          <Route exact path="/api/BisectionAPI" component={BisectionAPI} />
          <Route exact path="/FalsePos" component={FalsePos} />
          <Route exact path="/FalsePos" />
        </div>
      </div>
    )
  }
}
export default App;