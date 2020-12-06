import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home';
import {About} from './components/About';
import {Route, BrowserRouter as Router} from "react-router-dom";
import { Support } from './components/Support';
import {Service} from './components/Service';
import {Contact} from './components/Contact';
function App(){
  return(
    <Router>
      <Home/>
    <Route path="/" exact component={About}/>
    <Route path="/KiwiCleaning" exact component={About}/>
    <Route path="/Home" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Support" component={Support}/>
    <Route path="/Service" component={Service}/>
    <Route path="/Contact" component={Contact} />
    </Router>
  ) 
}

export default App;
