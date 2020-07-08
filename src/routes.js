import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/work' component={Work}/>
        <Route path='/work/:id' component={Work}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)