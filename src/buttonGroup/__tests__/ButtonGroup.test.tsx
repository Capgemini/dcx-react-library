import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../../button';

describe('Button Group', () => {
  it('should render', () => {
    render(
      <ButtonGroup>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toEqual(3);
  });

  it('should render a button group with correct class names', () => {
    render(
      <ButtonGroup className="button-group-test">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const btnGroupElm: HTMLElement = screen.getByRole('group');
    expect(btnGroupElm.classList.contains('button-group-test')).toBeTruthy();
    expect(btnGroupElm.classList.contains('dcx-button-group')).toBeTruthy();
    expect(
      btnGroupElm.classList.contains('dcx-button-group-layout--horizontal')
    ).toBeTruthy();
  });

  it('should be able to render active-class', () => {
    const { getByText, container } = render(
      <ButtonGroup buttonClassName="abc">
        <Button label="Button 1" className="button-group-test" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).toHaveClass('active-class');
    fireEvent.click(getByText('Button 3'));
    expect(getByText('Button 3')).toHaveClass('active-class');
    expect(getByText('Button 1')).not.toHaveClass('active-class');
    expect(getByText('Button 2')).not.toHaveClass('active-class');
    expect(container.querySelectorAll('.abc').length).toBe(3);
  });

  it('should be able to render multiple active-class', () => {
    const { getByText, container } = render(
      <ButtonGroup buttonClassName="abc" type="multiple">
        <Button label="Button 1" className="button-group-test" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    fireEvent.click(getByText('Button 1'));
    fireEvent.click(getByText('Button 3'));

    expect(getByText('Button 1')).toHaveClass('active-class');
    expect(getByText('Button 2')).not.toHaveClass('active-class');
    expect(getByText('Button 3')).toHaveClass('active-class');
    expect(container.querySelectorAll('.abc').length).toBe(3);
  });

  it('should render a button group with correct layout class for vertical', () => {
    render(
      <ButtonGroup layout="vertical">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const btnGroupElm: HTMLElement = screen.getByRole('group');
    expect(
      btnGroupElm.classList.contains('dcx-button-group-layout--vertical')
    ).toBeTruthy();
  });

  it('should render a disabled button group correctly', () => {
    render(
      <ButtonGroup disabled>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const buttons: HTMLElement[] = screen.getAllByRole('button');
    expect(buttons[0].hasAttribute('disabled')).toBeTruthy();
    expect(buttons[1].hasAttribute('disabled')).toBeTruthy();
    expect(buttons[2].hasAttribute('disabled')).toBeTruthy();
  });

  it('should render the button variants correctly primary', () => {
    render(
      <ButtonGroup buttonVariant="primary">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const buttonClass = document.querySelectorAll('.dcx-button--primary');
    expect(buttonClass.length).toEqual(3);
  });

  it('should render the button variants correctly secondary', () => {
    render(
      <ButtonGroup buttonVariant="secondary">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const buttonClass = document.querySelectorAll('.dcx-button--secondary');
    expect(buttonClass.length).toEqual(3);
  });

  it('should render the button variants correctly tertiary', () => {
    render(
      <ButtonGroup buttonVariant="tertiary">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const buttonClass = document.querySelectorAll('.dcx-button--tertiary');
    expect(buttonClass.length).toEqual(3);
  });

  it('should be able to trigger click event when type is single', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ButtonGroup buttonClassName="abc" type="single" onClick={mockOnClick}>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const button = getByText('Button 2');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should be able to trigger click event when type is multiple', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ButtonGroup buttonClassName="abc" type="multiple" onClick={mockOnClick}>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const button1 = getByText('Button 1');
    const button2 = getByText('Button 2');
    fireEvent.click(button1);
    fireEvent.click(button2);
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
});
