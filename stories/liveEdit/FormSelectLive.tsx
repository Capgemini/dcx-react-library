import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormSelect } from '../../src/formSelect/FormSelect';

const FormSelectDemo = `
function FormSelectDemo() {
  const [value, setValue] = React.useState('')

  const handleChange = event => {
    if(typeof event === 'string'){
      setValue(event);
    }else{
      setValue(event.currentTarget.value);
    }
  }

  return (
    <FormSelect
      id="select"
      nullOption="Select..."
      value=""
      disabled={false}
      selectProps={{}}
      label="Select with icon"
      labelProps={{
        style: {
          display: 'block',
          marginBottom: '5px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      }}
      onChange={handleChange}
      selectIconProps={
        {
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
          // selectStyle: {{}},
          // listStyle: {{}},
          iconStyle:{
            width: '18px',
            height: '18px',
            borderRadius: '0px'
          }
        }
      }
      // options={['Capgemini', 'Cybersecurity', 'Intelligent Industry', 'Sustainability', 'Cloud']}
      // options= {[
      //   { 
      //     label: 'Cloud', 
      //     value: 'Cloud', 
      //     ariaLabel: 'Cloud', 
      //     id: 'id1',
      //     icon: '/cloud.png',
      //   },{ 
      //     label: 'Cybersecurity', 
      //     value: 'Cybersecurity', 
      //     ariaLabel: 'Cybersecurity', 
      //     id: 'id2',
      //     // icon: '/cyberSecurity.png',
      //   },{ 
      //     label: 'Intelligent Industry', 
      //     value: 'Intelligent Industry', 
      //     ariaLabel: 'Intelligent Industry', 
      //     disabled: true,
      //     id: 'id3',
      //     icon: '/ai.png',
      //   },{ 
      //     label: 'Sustainability', 
      //     value: 'Sustainability', 
      //     ariaLabel: 'sustainability', 
      //     id: 'id4',
      //     icon: '/sustainability.png',
      //   }
      // ]}
      //If you need a more advanced control of options use the following:
      optionGroups={[
        {
          label: 'Capgemini',
          displayCount: false,
          options: [
            { 
              label: 'Engineering', 
              value: 'Engineering', 
              ariaLabel: 'Engineering', 
              id: 'id1',
              icon: '/capgemini.png',
            },{ 
              label: 'Invent', 
              value: 'Invent', 
              ariaLabel: 'Invent', 
              id: 'id2',
              //icon: '/capgemini.png',
            },{ 
              label: 'Frog', 
              value: 'Frog', 
              ariaLabel: 'Frog', 
              id: 'id3',
              icon: '/capgemini.png',
            },{ 
              label: 'Sogeti', 
              value: 'Sogeti', 
              ariaLabel: 'Sogeti', 
              id: 'id3',
              disabled: true,
              icon: '/capgemini.png',
            }
          ]
        },{
          label: 'Services',
          displayCount: true,
          options: [
            { 
              label: 'Cloud', 
              value: 'Cloud', 
              ariaLabel: 'Cloud', 
              id: 'id1',
              icon: '/cloud.png',
            },{ 
              label: 'Cybersecurity', 
              value: 'Cybersecurity', 
              ariaLabel: 'Cybersecurity', 
              id: 'id2',
              icon: '/cyberSecurity.png',
            },{ 
              label: 'Intelligent Industry', 
              value: 'Intelligent Industry', 
              ariaLabel: 'Intelligent Industry', 
              id: 'id3',
              disabled: true,
              icon: '/ai.png',
            },{ 
              label: 'Sustainability', 
              value: 'Sustainability', 
              ariaLabel: 'sustainability', 
              id: 'id4',
              icon: '/sustainability.png',
            }
          ]
        }
      ]}
      labelClassName=""
      containerClassName=""
      style={{}}
      ariaLabel=""
      labelProps={{}}
      hint={{
        text: "",
        className: "",
        id: ""
      }}
      // you can also use the compact version of "error"
      errorMessage=""
      errorMessageClassName=""
      errorMessageVisuallyHidden={{
        text: "",
        className: "",
      }}
      errorMessageId=""
      tabIndex={0}
      containerErrorClassName="containerErrorClassName"
      containerFilledClassName="containerFilledClassName"
      variant="floating"
    />
  );
}
`.trim();

const FormSelectLive = () => {
  const scope = { FormSelect };
  return (
    <LiveProvider code={FormSelectDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormSelectLive;
