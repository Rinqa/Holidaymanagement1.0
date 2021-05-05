import logo from './LogoL.svg';
import './App.css';

import { Navigation } from './Navigation';
import { LoginKompania } from './LoginKompania';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegjisterKompania} from './RegjisterKompania';
import ReactDOM from "react-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      

      <Navigation />

      <Switch>
        <Route path='/'  exact />
        <Route path='/drejtimet'  />
        <Route path='/llojistudimeve'  />
        <Route path='/aplikues'  />
        <Route path='/LoginKompania' component={LoginKompania}/>
        <Route path='/RegjisterKompania' component={RegjisterKompania}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
