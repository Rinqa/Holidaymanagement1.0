
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Admini} from './Homepages/Admini'
import {Home} from './Homepages/Home'
import {calendar}from './Extra/calendar'
import {profili} from './Extra/profili'
import {GetPushimet} from './Extra/GetPushimet'
import { EditPassModal } from './components/Edit/EditPassModal';

function App() {
  return (
    <BrowserRouter>
  
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/admin' component={Admini}/>
    <Route path='/calendar' component={calendar}/>
    <Route path="/profili" component={profili}/>
    <Route path="/pushimet" component={GetPushimet}/>
    <Route path="/editpass" component={EditPassModal}/>
  </Switch>
  </BrowserRouter>

  );
}

export default App;
