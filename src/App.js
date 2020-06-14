import React from 'react';
import ReactGA from 'react-ga';
import { createMemoryHistory } from 'history';
import {Route,Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './views/Home';
import  Career from './views/Career';
import  Apply from './views/Apply';
import  Gallery from './views/Gallery';
import  Services from './views/Services';
import  About from './views/About';
import  Founders from './views/Founders';
import  Terms from './views/Terms';
import './App.css';
import Download from './components/Download';

const trackingId = "UA-164944336-1"; 
ReactGA.initialize(trackingId);
const history = createMemoryHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
const App = () => (
  <Switch>
    <Route history={history} exact path="/home" component={Home} />
    <Route history={history} exact path="/career" component={Career} />
    <Route history={history} path="/apply" component={Apply}/>
    <Route history={history} path="/gallery" component={Gallery}/>
    <Route history={history} path="/services" component={Services}/>
    <Route history={history} path="/about" component={About}/>
    <Route history={history} path="/team" component={Founders}/>
    <Route history={history} path="/download" component={Download}/>
    <Route history={history} path="/terms&conditions" component={Terms}/>
    <Route history={history} path='/blog' component={() => { 
     window.location.href = 'https://blog.larkcs.com'; 
     return null;
}}/>
  </Switch>
);

export default App;
