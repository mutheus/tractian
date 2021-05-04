import React from 'react';
import MachineList from '../MachineList/MachineList';

const arr = [];

const AllMachines = ({ status = arr, assets = arr, count = arr }) => {
  return (
    <div className="machines">
      <h2 className="machines__title">All Machines</h2>
      
      <ul className="machines__list">
        {
          status.map((item, index) => <MachineList status={item} count={count[index]} assets={assets} />)
        }
      </ul>
    </div>
  );
}

export default AllMachines;