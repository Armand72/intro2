import React from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Open from "./components/navbar/Open";
import Mercury from './components/Planets/Mercury';
import Venus from './components/Planets/Venus';
import Mars from './components/Planets/Mars';
import Jupiter from './components/Planets/Jupiter';
import Saturne from './components/Planets/Saturne';
import Uranus from './components/Planets/Uranus';
import Neptune from './components/Planets/Neptune';


import About from './components/About';

import SignIn from './components/SignIn';
import Table from './components/Table';
import Payment from './components/Payment';

function App() {
  return (
    <div>
<Router>
    <Open/>
    <Switch>
    <Route exact path="/" exact component={Intro}/>
    <Route exact path="/" exact component={SolarSystem}/>


    <Route exact path="/Mercury"exact component={Mercury} />
    <Route exact path="/Venus" exact component={Venus} />
    <Route exact path="/Mars" exact component={Mars}/>
    <Route path="/Jupiter" component={Jupiter}/>
    <Route path="/Saturne" component={Saturne}/>
    <Route path="/Uranus" component={Uranus}/>
    <Route path="/Neptune" component={Neptune}/>

    <Route exact path="/About" exact component={About} /> 
    <Route exact path="/SignIn" exact component={SignIn} />
    <Route exact path="/Table" exact component={Table} />
    <Route exact path="/Payment" exact component={Payment}/>
    </Switch>
    <Footer/>
    </Router>
  

    </div>
    );
  }
  
  export default App;
  

