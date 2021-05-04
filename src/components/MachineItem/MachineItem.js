import React from 'react';
import { Link } from "react-router-dom";
import { trim } from "../utils/utils";

const obj = {};

const MachineItem = ({ asset = obj }) => {
  const machineName = '/' + asset.name,
    url = trim(machineName);
  
  return(
    <li className="machine-list">
      <Link to={url}>
        <span className="healthscore">{Math.floor(Number(asset.healthscore))}%</span>
        <span className="asset-name">{asset.name}</span>
        <span className="sensors">{asset.sensors}</span>
      </Link>
    </li>
  );
}

export default MachineItem;