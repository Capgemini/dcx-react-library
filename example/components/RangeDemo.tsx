import React from 'react';
import {Range} from 'dcx-react-library';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeDown, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import './range.scss';

export const RangeDemo = () => {
    const [displayValue, setDisplayValue] = React.useState('');

    return (
    <>
        <h1>Simple Range</h1>
        <Range/>
        <h1>Range with custom values</h1>
        <Range min={0} max={100} value={75}/>
        <h1>Range with custom styling</h1>
        <Range inputClass="customRange"/>
        <h1>Disabled Range</h1>
        <Range disabled={true}/>
        <h1>Range with displayed value</h1>
        <Range onChange={setDisplayValue} />
        <h2>{displayValue}</h2>
        <h1>Range with prefix & suffix</h1>
        <Range
               prefix={
                   <div
                       style={{
                           border: '1px solid #d2d2d2',
                           padding: '5px',
                       }}
                   >
                       <FontAwesomeIcon icon={faVolumeDown}/>
                   </div>
               }
               suffix={
                   <div
                       style={{
                           border: '1px solid #d2d2d2',
                           padding: '5px',
                       }}
                   >
                       <FontAwesomeIcon icon={faVolumeUp}/>
                   </div>

               }
        />
    </>
);
}