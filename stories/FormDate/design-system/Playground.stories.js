/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/form-input.css';
import { useState } from 'react';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { FormDate } from '../../../src/formDate';

const DateStory = (args) => {
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState(0);
  const handleValidity = (valid, date) => {
    setIsValid(valid);
    setDate(date);
  };
  return (
    <div>
      <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)} />
      <pre>isValid: {isValid.toString()}</pre>
      <pre>date: {JSON.stringify(new Date(date))}</pre>
    </div>
  );
};

export default {
  title: 'DCXLibrary/Form/Date/Design system',
  component: FormDate,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  render: DateStory,
  args: {
    dateFormat: 'dd/mm/yyyy',
  },
  argTypes: { onClick: { action: 'onClick' } },
};
