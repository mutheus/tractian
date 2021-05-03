import React, { useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllMachines from './AllMachines';
import MachinePage from './MachinePage';
import { Context } from './Store';
import logo from '../logo.svg';
import axios from 'axios';

const Container = () => {
  const [ state, dispatch ] = useContext(Context);
  
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
    
    dispatch({type: 'SET_ASSETS', payload: result.data});
    dispatch({type: 'SET_STATUS', payload: status});
    dispatch({type: 'SET_COUNT', payload: count});
  }, [])
  
  return(
    <Router>
      <div className="app">
        <header className="app__header">
          <h1 className="app__logo"><Link to="/"><img src={logo} alt="Tractian logo"/></Link></h1>
        </header>
        <main className="app__content">
          <Switch>
            <Route exact path="/">
              <AllMachines status={state.status} assets={state.assets} count={state.count} />
            </Route>
            <Route path="/:name">
              <MachinePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default Container;