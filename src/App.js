import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './views/Home';
import  Career from './views/Career';
import  Apply from './views/Apply';
import  Gallery from './views/Gallery';
import  Services from './views/Services';
import  About from './views/About';
import  Founders from './views/Founders';
import './App.css';
import Download from './components/Download';

const App = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/career" component={Career} />
    <Route path="/apply" component={Apply}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/services" component={Services}/>
    <Route path="/about" component={About}/>
    <Route path="/team" component={Founders}/>
    <Route path="/download" component={Download}/>
  </Switch>
);

export default App;
