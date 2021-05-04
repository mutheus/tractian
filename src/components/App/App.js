import React, { useState, useEffect} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import AllMachines from '../AllMachines/AllMachines';
import Machine from '../Machine/Machine';
import axios from 'axios';

const App = () => {
  const [assets, setAssets] = useState([]);
  const [status, setStatus] = useState([]);
  const [count, setCount] = useState([]);
  
  useEffect(async () => {
    const result = await axios(
      'https://my-json-server.typicode.com/tractian/fake-api/assets',
    );
    
    const counting = result.data.reduce((acc, asset) => {
      if (!acc[asset.status] && asset.status) {
        acc[asset.status] = 1;
      } else {
        acc[asset.status] = acc[asset.status] + 1;
      }
      
      return acc;
    }, {});
      
    const status = Object.keys(counting);
    const count = Object.values(counting);
    
    setAssets(result.data);
    setStatus(status);
    setCount(count);
  }, [])
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="header">
          <h1 className="header__logo">
            <Link to="/">
              <img src={logo} alt="Tractian logo" />
            </Link>
          </h1>
        </header>
        <main className="container">
            <Switch>
              <Route exact path="/">
                <AllMachines status={status} assets={assets} count={count} />
              </Route>
              <Route path="/:machine">
                <Machine assets={assets}/>
              </Route>
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;