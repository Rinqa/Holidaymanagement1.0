import logo from './LogoL.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        React JS Tutorial
   </h3>

      <Navigation />

      <Switch>
        <Route path='/'  exact />
        <Route path='/drejtimet'  />
        <Route path='/llojistudimeve'  />
        <Route path='/aplikues'  />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
