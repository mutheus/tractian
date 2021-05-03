import React, { Component } from 'react';
import Machine from './Machine';
import arrowDown from './arrow-down.svg';

class AssetList extends Component {
  static defaultProps = {
    status: [],
    assets: [],
    quantity: []
  }
  
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }
  
  render() {
    const { props, state } = this;
    
    return(
      <li className="asset__item">
        <h3 onClick={this.handleClick}><img src={arrowDown} alt="Arrow icon" /> {props.status} <span className="asset__quantity">({props.quantity})</span></h3>
        <ul>
          { state.open && (
              props.assets.map(item => item.status === props.status ? <Machine asset={item} /> : '')
            )
          }
        </ul>
      </li>
    );
  }
}

export default AssetList;