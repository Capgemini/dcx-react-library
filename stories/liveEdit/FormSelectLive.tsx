import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormSelect } from '../../src/formSelect/FormSelect';

const FormSelectDemo = `
function FormSelectDemo() {
  const [value, setValue] = React.useState('')
  const handleChange = event => {
    setValue(event.currentTarget.value);
  }
  return (
    <FormSelect
      id="select"
      nullOption="Select..."
      disabled={false}
      selectProps={{}}
      value=""
      label="Basic"
      labelProps={{
        style: {
          display: 'block',
          marginBottom: '5px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      }}
      onChange={handleChange}
      iconStyle={{
        width: '20px',
        height: '20px',
        borderRadius: '0px'
      }}
      totalOptionToShow= '5'
      selectWithIconClassName='select-with-Icon-container'
      //If you need a more advanced control of options use the following:
      // options={[
      //   { 
      //     label: 'Engineering', 
      //     value: 'Engineering', 
      //     ariaLabel: 'Engineering', 
      //     id: 'id1',
      //     icon: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188',
      //   },
      //   { 
      //     label: 'Invent', 
      //     value: 'Invent', 
      //     ariaLabel: 'Invent', 
      //     id: 'id2',
      //     icon: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188',
      //   },
      //   { 
      //     label: 'Frog', 
      //     value: 'Frog', 
      //     ariaLabel: 'Frog', 
      //     id: 'id3',
      //     icon: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188',
      //   },
      //   { 
      //     label: 'Sogeti', 
      //     value: 'Sogeti', 
      //     ariaLabel: 'Sogeti', 
      //     id: 'id4',
      //     icon: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188',
      //   },
      // ]}
      // options={['option1','option2', 'option3']}
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
            },{ 
              label: 'Invent', 
              value: 'Invent', 
              ariaLabel: 'Invent', 
              id: 'id2',
              icon: '/capgemini.png',
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
              icon: '/ai.png',
            },{ 
              label: 'sustainability', 
              value: 'sustainability', 
              ariaLabel: 'sustainability', 
              id: 'id4',
              icon: '/sustainability.png',
            }
          ]
        }
      ]}
      selectClassName="select-with-Icon-list"
      labelClassName=""
      containerClassName=""
      ariaLabel=""
      hint={{
        text: '',
        className: '',
        id: ''
      }}
      // you can also use the compact version of "error"
      errorMessage=""
      errorMessageClassName=""
      errorMessageVisuallyHidden={{
        text: '',
        className: '',
      }}
      errorMessageId=""
      defaultValue=""
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
