import React from 'react';
import { ButtonGroup, Button } from '@capgeminiuk/dcx-react-library';

export const ButtonGroupDemo = () => {
  return (
    <>
      <h2>ButtonGroup example when no type provided</h2>
      <ButtonGroup
        buttonVariant="secondary"
        onClick={(e: any) => {
          console.log('-=-=->', e);
        }}
      >
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example when type is Single toggle</h2>
      <ButtonGroup buttonVariant="secondary" type="single">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>

      <h2>ButtonGroup example when type is Multiple toggle</h2>
      <ButtonGroup
        buttonVariant="secondary"
        type="multiple"
        onClick={(e: any) => {
          console.log('-=-=->', e);
        }}
      >
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    </>
  );
};
