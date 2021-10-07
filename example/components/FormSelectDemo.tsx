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
      <h1>Select your favourite football club</h1>
      <label id="club" style={{ fontSize: '24px' }}>
        The selected option is: Arsenal
      </label>
      <br />
      <FormSelect
        nullOption="Select..."
        optionGroups={[
          {
            label: 'English Premier League',
            displayCount: true,
            options: [
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
            ],
          },
          {
            label: 'Spanish La Liga',
            displayCount: true,
            options: [
              { label: 'Atlético Madrid', value: 'Atlético Madrid' },
              { label: 'Real Madrid', value: 'Real Madrid' },
              { label: 'Barcelona', value: 'Barcelona' },
            ],
          },
          {
            label: 'Italian Seria A',
            displayCount: true,
            options: [
              { label: 'Inter Milan', value: 'Inter Milan' },
              { label: 'Milan', value: 'Milan' },
              { label: 'Juventus', value: 'Juventus' },
              { label: 'Lazio', value: 'Lazio' },
              { label: 'Roma', value: 'Roma' },
              {
                label: 'Napoli',
                value: 'Napoli',
                disabled: true,
              },
            ],
          },
          {
            label: 'German Bundesliga',
            displayCount: true,
            options: [
              { label: 'Bayern', value: 'Bayern' },
              { label: 'Dortmund', value: 'Dortmund' },
              { label: 'Leverkusen', value: 'Leverkusen' },
              {
                label: 'Schalke',
                value: 'Schalke',
                disabled: true,
              },
            ],
          },
          {
            label: 'France Ligue 1',
            displayCount: true,
            options: [
              { label: 'PSG', value: 'PSG' },
              { label: 'Lille', value: 'Lille' },
              { label: 'Monaco', value: 'Monaco' },
              { label: 'Lyon', value: 'Lyon' },
              { label: 'Marseille', value: 'Marseille' },
            ],
          },
        ]}
        style={{
          fontSize: '14px',
          fontFamily: 'Verdana',
          fontWeight: 'bold',
        }}
        onChange={handleSelectedValue}
      />
    </div>
  );
};
