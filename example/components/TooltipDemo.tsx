import React from 'react';
import { ToolTip } from 'dcx-react-library';
//import { ToolTip } from './toolTip';

export const TooltipDemo = () => {
  const content =
    "Created by British designer Thomas Heatherwick, it is hoped the Airo will go into production in China in 2023, with plans to make a million of them.The radical design is intended to address not only the pollution issue, but also help solve the space crisis.Critics are not convinced it can ever be more than a concept car.Despite designing London's new version of the iconic Routemaster bus, Mr Heatherwick is better known for architectural projects such as Google's headquarters in California and London.He told the BBC that while he had never designed a car before, he was intrigued by the brief.";

  return (
    <div style={{ padding: '250px' }}>
      <div>
        <ToolTip
          content={content}
          width="250px"
          background="red"
          color="white"
          direction="bottom"
        >
          <b> Testing Bottom </b>
        </ToolTip>
      </div>

      <div>
        <ToolTip
          content={content}
          direction="top"
          width="250px"
          background="red"
          color="white"
        >
          <b> Testing Top </b>
        </ToolTip>
      </div>
      <div>
        <ToolTip
          content={content}
          direction="left"
          width="250px"
          background="red"
          color="white"
        >
          <b> Test Left </b>
        </ToolTip>
      </div>
      <div>
        <ToolTip
          content={content}
          direction="right"
          width="250px"
          background="red"
          color="white"
        >
          <b> Test Right</b>
        </ToolTip>
      </div>
    </div>
  );
};
