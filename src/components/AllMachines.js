import React, { Component } from 'react';
import AssetList from './AssetList';

class AllMachines extends Component {
  static defaultProps = {
    status: [],
    assets: [],
    count: []
  }
  
  render() {
    const { props } = this,
      { assets, status, count } = props;
    
    return(
      <div>
        <h2>All Machines</h2>
        
        <ul className="status-list">
          {
            status.map((item, index) => <AssetList status={item} quantity={count[index]} assets={assets} />)
          }
        </ul>
      </div>
    );
  }
}

export default AllMachines;