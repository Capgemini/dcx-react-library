import { FormSelect } from '@capgeminiuk/dcx-react-library';
import { ChangeEvent } from 'react';

export const FormSelectWithIconDemo = () => {
  const handleSelectedValue = (
    evt: ChangeEvent<HTMLSelectElement> | string
  ) => {
    document.getElementsByTagName(
      'label'
    )[0].innerText = `The selected option is: ${evt}`;
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Select Capgemini Departments or services</h1>
      <label id="club" style={{ fontSize: '24px' }}>
        The selected option is: Engineering
      </label>
      <br />
      <FormSelect
        nullOption="Select..."
        onChange={handleSelectedValue}
        selectIconProps={{
          fontSize: '14px',
          selectWidth: '185px',
          listItemsCountToShow: 7,
          itemTextColor: '#000000',
          border: '1px solid #747d8c',
          itemBackgroundColor: '#ffffff',
          itemDisabledTextColor: '#747d8c',
          groupTilteBackgroundColor: '#0000000D',
          itemHoverBackgroundColor: '#0000000D',
          fontFamily: '"GDS Transport", arial, sans-serif',
          selectStyle: {},
          listStyle: {},
          iconStyle: {
            width: '18px',
            height: '18px',
            borderRadius: '0px',
          },
        }}
        optionGroups={[
          {
            label: 'Capgemini',
            displayCount: true,
            options: [
              {
                label: 'Engineering',
                value: 'Engineering',
                ariaLabel: 'Engineering',
                id: 'id1',
                icon: '/capgemini.png',
              },
              {
                label: 'Invent',
                value: 'Invent',
                ariaLabel: 'Invent',
                id: 'id2',
                icon: '/capgemini.png',
              },
              {
                label: 'Frog',
                value: 'Frog',
                ariaLabel: 'Frog',
                id: 'id3',
              },
              {
                label: 'Sogeti',
                value: 'Sogeti',
                ariaLabel: 'Sogeti',
                id: 'id3',
                disabled: true,
                icon: '/capgemini.png',
              },
            ],
          },
          {
            label: 'Services',
            displayCount: true,
            options: [
              {
                label: 'Cloud',
                value: 'Cloud',
                ariaLabel: 'Cloud',
                id: 'id1',
                icon: '/cloud.png',
              },
              {
                label: 'Cybersecurity',
                value: 'Cybersecurity',
                ariaLabel: 'Cybersecurity',
                id: 'id2',
                icon: '/cyberSecurity.png',
              },
              {
                label: 'Intelligent Industry',
                value: 'Intelligent Industry',
                ariaLabel: 'Intelligent Industry',
                id: 'id3',
                disabled: true,
                icon: '/ai.png',
              },
              {
                label: 'sustainability',
                value: 'sustainability',
                ariaLabel: 'sustainability',
                id: 'id4',
                icon: '/sustainability.png',
              },
            ],
          },
        ]}
        style={{
          fontSize: '14px',
          fontFamily: 'Verdana',
          fontWeight: 'bold',
        }}
      />
    </div>
  );
};
