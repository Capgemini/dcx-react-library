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

  it('should be able to render buttonsClassName in all the child buttons', () => {
    const { container } = render(
      <ButtonGroup buttonsClassName="btnClass">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );

    expect(container.querySelectorAll('.btnClass').length).toBe(3);
  });

  it('should be able to render active-class when button is clicked', () => {
    const { getByText } = render(
      <ButtonGroup buttonsClassName="btnClass">
        <Button label="Button 1" value="value" />
        <Button label="Button 2" />
        <Button label="Button 3" id="id" />
      </ButtonGroup>
    );
    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).toHaveClass('active-class');
    fireEvent.click(getByText('Button 2'));
    expect(getByText('Button 2')).toHaveClass('active-class');
    fireEvent.click(getByText('Button 3'));
    expect(getByText('Button 3')).toHaveClass('active-class');
    expect(getByText('Button 2')).not.toHaveClass('active-class');
    expect(getByText('Button 1')).not.toHaveClass('active-class');
  });

  it('should be able to render multiple active-class', () => {
    const { getByText } = render(
      <ButtonGroup type="multiple">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    fireEvent.click(getByText('Button 1'));
    fireEvent.click(getByText('Button 3'));

    expect(getByText('Button 1')).toHaveClass('active-class');
    expect(getByText('Button 2')).not.toHaveClass('active-class');
    expect(getByText('Button 3')).toHaveClass('active-class');
  });

  it('should be able to remove active-class if the same button is clicked twice when the type is single', () => {
    const { getByText } = render(
      <ButtonGroup type="single">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );

    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).toHaveClass('active-class');

    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).not.toHaveClass('active-class');
  });

  it('should be able to remove active-class if the selected button is clicked twice when the type is multiple', () => {
    const { getByText } = render(
      <ButtonGroup type="multiple">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );

    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).toHaveClass('active-class');
    fireEvent.click(getByText('Button 3'));
    expect(getByText('Button 3')).toHaveClass('active-class');
    expect(getByText('Button 2')).not.toHaveClass('active-class');
    fireEvent.click(getByText('Button 1'));
    expect(getByText('Button 1')).not.toHaveClass('active-class');
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
      <ButtonGroup buttonsVariant="primary">
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
      <ButtonGroup buttonsVariant="secondary">
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
      <ButtonGroup buttonsVariant="tertiary">
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
      <ButtonGroup
        buttonsClassName="btnClass"
        type="single"
        onClick={mockOnClick}
      >
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
      <ButtonGroup
        buttonsClassName="btnClass"
        type="multiple"
        onClick={mockOnClick}
      >
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

  it('should be able to get value and id attribute if used', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ButtonGroup
        buttonsClassName="btnClass"
        type="multiple"
        onClick={mockOnClick}
      >
        <Button label="Button 1" value="value" />
        <Button label="Button 2" id="id" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const button1 = getByText('Button 1');
    const button2 = getByText('Button 2');
    fireEvent.click(button1);
    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object), ['value']);
    fireEvent.click(button2);
    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object), [
      'value',
      'id',
    ]);
    fireEvent.click(button1);
    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object), ['id']);
  });

  it('should be able to pre select the buttons which are given in selected prop', () => {
    const { getByText } = render(
      <ButtonGroup
        buttonsClassName="btnClass"
        type="multiple"
        selected={[2, 'value', 'id']}
      >
        <Button label="Button 1" value="value" />
        <Button label="Button 2" id="id" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
    const button1 = getByText('Button 1');

    expect(getByText('Button 1')).toHaveClass('active-class');
    expect(getByText('Button 2')).toHaveClass('active-class');
    expect(getByText('Button 3')).toHaveClass('active-class');
    fireEvent.click(button1);
    expect(getByText('Button 1')).not.toHaveClass('active-class');
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <ButtonGroup
        className="myStyle"
        buttonGroupProps={{ style: { color: 'red' } }}
      >
        <Button label="Button 1" />
        <Button label="Button 2" value="value" />
        <Button label="Button 3" id="id" />
      </ButtonGroup>
    );
    const labelElement = container.getElementsByClassName('myStyle');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should be able to pre-select buttons based on indices passed in the selected array, even if the buttons have value and id attributes', () => {
    const { getByText } = render(
      <ButtonGroup
        buttonsClassName="btnClass"
        type="multiple"
        selected={[1, 2, 'value', 0, 'id']}
      >
        <div>
          <Button label="Button 1" />
        </div>

        <div>
          <div>
            <Button label="Button 2" id="id" />
          </div>
        </div>

        <Button label="Button 3" value="value" />
      </ButtonGroup>
    );
    const button1 = getByText('Button 1');

    expect(getByText('Button 1')).toHaveClass('active-class');
    expect(getByText('Button 2')).toHaveClass('active-class');
    expect(getByText('Button 3')).toHaveClass('active-class');
    fireEvent.click(button1);
    expect(getByText('Button 1')).not.toHaveClass('active-class');
  });

  it('should be able to apply buttonsClassName class to all and only Button commponents even if ther are nested', () => {
    const { getByText } = render(
      <ButtonGroup
        buttonsClassName="myStyle"
        selected={[0, 2, 'id', 'value']}
        type="multiple"
      >
        <div>
          <Button label="Button 1" />
        </div>

        <div>
          <div>
            <Button label="Button 2" id="id" />
          </div>
        </div>
        <div>
          <Button label="Button 4" />
        </div>

        <Button label="Button 3" value="value" />
      </ButtonGroup>
    );

    expect(getByText('Button 1')).toHaveClass('active-class');
    expect(getByText('Button 2')).toHaveClass('active-class');
    expect(getByText('Button 3')).toHaveClass('active-class');
    expect(getByText('Button 4')).toHaveClass('active-class');
    const numberOfMyStyles = document.querySelectorAll('.myStyle').length;
    expect(numberOfMyStyles).toEqual(4);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveClass('myStyle');
    });
  });

  it('should throw an error when the type is single and  multiple values are passed in selected prop', () => {
    const renderWithSelected = () =>
      render(
        <ButtonGroup selected={[4, 'value']}>
          <Button label="Button 1" />
          <Button label="Button 2" value="value" />
          <Button label="Button 3" id="id" />
        </ButtonGroup>
      );
    expect(renderWithSelected).toThrow(
      'Cannot pass multiple parameters if the type is Single'
    );
  });

  it('should throw an error when the elements present in the selected prop dont match with any Buttons', () => {
    const renderWithSelected = () =>
      render(
        <ButtonGroup
          buttonsClassName="btnClass"
          type="multiple"
          selected={[0, 1, 2, '123', 'gh']}
        >
          <Button label="Button 1" value="value" />
          <Button label="Button 2" id="id" />
          <Button label="Button 3" />
        </ButtonGroup>
      );
    expect(renderWithSelected).toThrow(
      'Element in the selected array do not match with any buttons.'
    );
  });

  it('should throw an error when a child is neither a Button comonent nor it has children as a Button component', () => {
    const renderWithSelected = () =>
      render(
        <ButtonGroup
          buttonsClassName="btnClass"
          type="multiple"
          selected={[0, 1, 2]}
        >
          <div></div>
          <div>
            <Button label="Button 1" />
          </div>

          <div>
            <div>
              <Button label="Button 2" id="id" />
            </div>
          </div>
          <div>
            <Button label="Button 4" />
          </div>
        </ButtonGroup>
      );
    expect(renderWithSelected).toThrow('Child dont have Button component');
  });
});
