import React, { useState } from 'react';
import MachineItem from '../MachineItem/MachineItem';
import arrowDown from './arrow-down.svg';

const arr = [];

const MachineList = ({ status = arr, count = arr, assets = arr }) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  }
  
  return(
    <li className="asset__item">
      <h3 onClick={handleClick}>
        <img src={arrowDown} alt="Arrow icon" /> 
          {status} 
          <span className="asset__quantity">({count})</span>
      </h3>
      <ul>
        { open && (
            assets.map(item => item.status === status ? <MachineItem asset={item} /> : '')
          )
        }
      </ul>
    </li>
  );
}

export default MachineList;