
import './App.css';

import { Navigation } from './Navigation';
import { Login } from './Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegjisterKompania} from './RegjisterKompania';
function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      

      <Navigation />

      <Switch>
        <Route path='/'  exact />
        <Route path='/drejtimet'  />
        <Route path='/llojistudimeve'  />
        <Route path='/aplikues'  />
        <Route path='/Login' component={Login}/>
        <Route path='/RegjisterKompania' component={RegjisterKompania}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
