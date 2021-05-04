import React from 'react';
import { useParams } from "react-router-dom";
import { trim } from "../utils/utils";

const arr = [];

const Machine = ({ assets = arr }) => {
  const { machine } = useParams();
  
  const asset = assets.find(item => {
    return trim(item.name) === machine;
  })
  
  return (
    <div className="asset">
      { asset &&
        <>
          <h1 className="asset__name">{asset.name}</h1>
        
          <div className="asset__img">
            <img src={asset.image} />
          </div>
        </>
      }
    </div>
  );
}

export default Machine;