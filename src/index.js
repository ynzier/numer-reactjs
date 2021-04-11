import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter, Route } from "react-router-dom"

import './App.css';

// Route

//import Components and Pages

import Home from './components/Home';
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า
import Bisection from './components/Bisection';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/Bisection" component={Bisection} />
  </BrowserRouter>,document.getElementById('root')
);