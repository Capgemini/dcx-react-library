import { FormSelect } from '../../src/formSelect/FormSelect';

export default {
  title: 'DCXLibrary/Form/Select/Without style',
  component: FormSelect,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    label:'Unstyled',
    labelProps:{
      style: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    options:['value1', 'value2']
  },
};


export const WithIcon = {
  args: {
    label: 'With icon',
    nullOption: 'Select...',
    labelProps: {
      style: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    selectIconProps: {
      itemHoverBackgroundColor: '#f5f5f5',
      listItemsCountToShow: 6,
      selectStyle: {
        width: '185px',
        border: '1px solid #747d8c',
        fontSize: '14px',
        fontFamily: '"GDS Transport", arial, sans-serif',
      },
      listStyle: {
        width: '197px',
        border: '1px solid #747d8c',
      },
      iconStyle: {
        width: '18px',
        height: '18px',
        borderRadius: '0px'
      }
    },
    optionGroups: [
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
    ],
  },
};
