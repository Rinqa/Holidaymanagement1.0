
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Admini} from './Homepages/Admini'
import {Home} from './Homepages/Home'
import {calendar}from './Extra/calendar'
import {Navigation} from './Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/admin' component={Admini}/>
    <Route path='/calendar' component={calendar}/>
  </Switch>
  </BrowserRouter>

  );
}

export default App;
