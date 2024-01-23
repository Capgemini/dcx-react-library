import React from 'react';
import { ButtonGroup, Button } from '@capgeminiuk/dcx-react-library';
import './range.scss';

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
      <ButtonGroup buttonsVariant="secondary" onClick={handleClick}>
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
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        onClick={(e: any, y: any) => {
          console.log('-=-=->', y, e);
        }}
      >
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>
        ButtonGroup example with multiple toggle when Id and value attribute are
        provided
      </h2>
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        onClick={(e: any, y: any) => {
          console.log('-=-=->', y, e);
        }}
      >
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with ButtonsClassname prop</h2>
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        buttonsClassName="myStyle"
      >
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example with selected prop</h2>
      <ButtonGroup
        buttonsVariant="secondary"
        type="multiple"
        selected={['abc', '123', 2]}
      >
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

      <h2>ButtonGroup example with layout prop</h2>
      <ButtonGroup buttonsVariant="secondary" type="multiple" layout="vertical">
        <Button label="Button 1" id="123" />
        <Button label="Button 2" value={'abc'} />
        <Button label="Button 3" />
      </ButtonGroup>
    </>
  );
};
