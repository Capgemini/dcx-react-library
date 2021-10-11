import React from 'react';
import { Range } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './range.scss';

export const RangeDemo = () => {
  const [displayValue, setDisplayValue] = React.useState('');

  return (
    <>
      <h1>Simple Range</h1>
      <Range min={0} max={100}/>
      <h1>Range with custom values</h1>
      <Range min={20} max={90} value={75} />
      <h1>Range with custom styling</h1>
      <Range min={0} max={100} inputClass="customRange" />
      <h1>Disabled Range</h1>
      <Range min={0} max={100} disabled={true} />
      <h1>Range with tooltip</h1>
      <Range min={0} max={100} showTooltip={true} />
      <h1>Range with displayed value</h1>
      <Range min={0} max={100} onChange={setDisplayValue} />
      <h2>{displayValue}</h2>
      <h1>Range with prefix & suffix</h1>
      <Range
          min={0} max={100}
        prefix={
          <div
            style={{
              border: '1px solid #d2d2d2',
              padding: '5px',
            }}
          >
            <FontAwesomeIcon icon={faVolumeDown} />
          </div>
        }
        suffix={
          <div
            style={{
              border: '1px solid #d2d2d2',
              padding: '5px',
            }}
          >
            <FontAwesomeIcon icon={faVolumeUp} />
          </div>
        }
      />
    </>
  );
};
