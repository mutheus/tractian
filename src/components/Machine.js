import React, { useContext, useEffect} from 'react';
import { Context } from './Store';
import { useHistory } from "react-router-dom";
import { trim } from "./utils";

const Machine = (props) => {
  const [ state, dispatch ] = useContext(Context);
  
  const history = useHistory();
  
  const motorName = '/' + props.asset.name,
    url = trim(motorName);
    
  const handleClick = (e) => {
    e.preventDefault();
    history.push(url);
  }
  
  return(
    <li className="machine-list">
      <a onClick={handleClick} href={url}>
        <span className="healthscore">{Math.floor(Number(props.asset.healthscore))}%</span>
        <span className="asset-name">{props.asset.name}</span>
        <span className="sensors">{props.asset.sensors}</span>
      </a>
    </li>
  );
}

export default Machine;