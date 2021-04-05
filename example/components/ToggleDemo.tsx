import React from 'react';
import { Toggle } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPowerOff } from '@fortawesome/free-solid-svg-icons';
export const ToggleDemo = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Toggle
        checked={checked}
        onChange={e => {
          setChecked(e);
        }}
        onColor="orange"
        offColor="gray"
        customOnLabel={
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'flex-start',
              marginLeft: '4px',
              alignItems: 'center',
              height: '100%',
              color: 'white',
            }}
          />
        }
        customOffLabel={
          <FontAwesomeIcon
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
        }
      />
    </div>
  );
};
