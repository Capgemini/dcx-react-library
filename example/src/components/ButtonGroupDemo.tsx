import React from 'react';
import { ButtonGroup, Button } from '@capgeminiuk/dcx-react-library';
import './ButtonGroupDemo.scss';

export const ButtonGroupDemo = () => {
  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
    selected: (string | number)[]
  ) => {
    console.log('Event:', evt);
    console.log('Selected:', selected);
  };

  return (
    <>
      <h2>ButtonGroup example when no type provided</h2>
      <ButtonGroup buttonsVariant="primary" onClick={handleClick}>
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example when type is Single toggle</h2>
      <ButtonGroup buttonsVariant="secondary" type="single">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example when type is Multiple toggle</h2>
      <ButtonGroup type="multiple">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example when layout is vertical</h2>
      <ButtonGroup layout="vertical">
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>
        ButtonGroup example with multiple toggle when Id and value attributes
        are provided
      </h2>
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        onClick={handleClick}
      >
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with ButtonsClassname prop</h2>
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        buttonsClassName="test"
      >
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with selected prop</h2>
      <ButtonGroup type="multiple" selected={[2, 'abc', '123']}>
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with disabled prop</h2>
      <ButtonGroup buttonsVariant="secondary" type="multiple" disabled>
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with buttonGroupProps prop</h2>
      <ButtonGroup buttonGroupProps={{ style: { color: 'red' } }}>
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <div style={{ marginBottom: 50 }}></div>
    </>
  );
};
