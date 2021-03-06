import * as React from 'react';
import { FormInput } from '../../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
export const FormInputDemo = () => {
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <FormInput
      name="password"
      type="text"
      value={value}
      onChange={handleChange}
      inputProps={{
        placeholder: 'enter your email',
      }}
      suffix={
        <div
          style={{
            border: '1px solid #d2d2d2',
            padding: '5px',
          }}
        >
          <FontAwesomeIcon icon={faAt} />
        </div>
      }
    />
  );
};
