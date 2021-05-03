import React, { useContext, useEffect} from 'react';
import { useHistory, useParams} from "react-router-dom";
import { Context } from './Store';
import { trim } from "./utils";

const MachinePage = () => {
  const [ state, dispatch ] = useContext(Context);
  
  const { name } = useParams();
  
  const asset = state.assets.find(item => {
    return trim(item.name) === name;
  })
  
  return(
    <div className="asset">
      <h1 className="asset__name">{asset.name}</h1>
      
      <div className="asset__img">
        <img src={asset.image} />
      </div>
    </div>
  );
}

export default MachinePage;