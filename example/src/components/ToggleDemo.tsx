import React from 'react';
import { Toggle } from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPowerOff } from '@fortawesome/free-solid-svg-icons';
export const ToggleDemo = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Toggle
        checked={checked}
        onChange={(e) => {
          setChecked(e);
        }}
        onColor="orange"
        offColor="gray"
        customOnLabel={
          <>
            <label htmlFor="toggleOn" style={{ display: 'none' }}>
              on
            </label>
            <FontAwesomeIcon
              id="toggleOn"
              style={{
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'flex-start',
                marginLeft: '4px',
                alignItems: 'center',
                height: '100%',
                color: 'white',
              }}
              icon={faCheck}
            />
          </>
        }
        customOffLabel={
          <>
            <label htmlFor="toggleOff" style={{ display: 'none' }}>
              off
            </label>
            <FontAwesomeIcon
              id="toggleOff"
              style={{
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '4px',
                alignItems: 'center',
                height: '100%',
                color: 'white',
              }}
              icon={faPowerOff}
            />
          </>
        }
      />
    </div>
  );
};
