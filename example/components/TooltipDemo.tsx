import React from 'react';
import { Tooltip } from './toolTip';

export const TooltipDemo = () => {
  const style = {
    color: 'white',
    background: 'red',
    width: '250px',
  };

  const content =
    "Created by British designer Thomas Heatherwick, it is hoped the Airo will go into production in China in 2023, with plans to make a million of them.The radical design is intended to address not only the pollution issue, but also help solve the space crisis.Critics are not convinced it can ever be more than a concept car.Despite designing London's new version of the iconic Routemaster bus, Mr Heatherwick is better known for architectural projects such as Google's headquarters in California and London.He told the BBC that while he had never designed a car before, he was intrigued by the brief.";

  return (
    <div style={{ padding: '250px' }}>
      <div>
        <Tooltip content={content} direction="bottom" style={style}>
          <b> Testing Bottom </b>
        </Tooltip>
      </div>

      <div>
        <Tooltip content={content} direction="top" style={style}>
          <b> Testing Top </b>
        </Tooltip>
      </div>
      <div>
        <Tooltip content={content} direction="left" style={style}>
          <b> Test Left </b>
        </Tooltip>
      </div>
      <div>
        <Tooltip content={content} direction="right" style={style}>
          <b> Test Right</b>
        </Tooltip>
      </div>
    </div>
  );
};
