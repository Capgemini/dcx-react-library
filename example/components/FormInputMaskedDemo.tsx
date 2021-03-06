import * as React from 'react';
import { FormInputMasked } from 'dcx-react-library';
export const FormInputMaskedDemo = () => {
  const [value, setValue] = React.useState('');
  const [typedValue, setTypedValue] = React.useState('');
  const handleChange = evt => {
    setTypedValue(evt.unmaskedValue);
    setValue(evt.value);
  };
  return (
    <>
      <FormInputMasked
        options={{
          mask: '£num',
          blocks: {
            num: {
              // nested masks are available!
              mask: Number,
              thousandsSeparator: ' ',
            },
          },
        }}
        value={value}
        onChange={handleChange}
        type="text"
        name="daniele"
      />
      <span>Typed value: {typedValue}</span>
    </>
  );
};