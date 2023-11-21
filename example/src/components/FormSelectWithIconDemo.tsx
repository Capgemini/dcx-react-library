import { FormSelect } from '@capgeminiuk/dcx-react-library';

export const FormSelectWithIconDemo = () => {
  //@ts-ignore
  const handleSelectedValue = (evt) => {
    document.getElementsByTagName(
      'label'
    )[0].innerText = `The selected option is: ${evt.target.value}`;
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
        selectIconProps={{
          itemHoverBackgroundColor: '#f5f5f5',
          listItemsCountToShow: 4,
          selectStyle: {
            width: '185px',
            border: '1px solid #747d8c',
            fontSize: '14px',
            fontFamily: '"GDS Transport", arial, sans-serif',
          },
          listStyle: {
            width: '185px',
            border: '1px solid #747d8c',
            fontFamily: '"GDS Transport", arial, sans-serif',
          },
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
                icon: '/capgemini.png',
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
        onChange={handleSelectedValue}
      />
    </div>
  );
};
