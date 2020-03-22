import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './views/Home';
import  Career from './views/Career';
import  Apply from './views/Apply';
import  Gallery from './views/Gallery';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/career" component={Career} />
    <Route path="/apply" component={Apply}/>
    <Route path="/gallery" component={Gallery}/>
  </Switch>
);

export default App;
