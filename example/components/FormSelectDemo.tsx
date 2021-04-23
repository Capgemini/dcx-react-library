import React from 'react';
import { FormSelect } from 'dcx-react-library';

export const FormSelectDemo = () => {
  const handleSelectedValue = evt => {
    document.getElementsByTagName(
      'label'
    )[0].innerText = `The selected option is: ${evt.target.value}`;
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Select your favourite top six english football club</h1>
      <label id="club" style={{ fontSize: '24px' }}>
        The selected option is: Arsenal
      </label>
      <br />
      <FormSelect
        options={[
          { label: 'Arsenal', value: 'Arsenal', selected: true },
          { label: 'Chelsea', value: 'Chelsea' },
          { label: 'Liverpool', value: 'Liverpool' },
          { label: 'Manchester City', value: 'Manchester City' },
          { label: 'Manchester United', value: 'Manchester United' },
          {
            label: 'Tottenham Hotspurs',
            value: 'Tottenham Hotspurs',
            disabled: true,
          },
        ]}
        selectProps={{
          style: {
            fontSize: '14px',
            fontFamily: 'Verdana',
            fontWeight: 'bold',
          },
        }}
        onChange={handleSelectedValue}
      />
    </div>
  );
};
