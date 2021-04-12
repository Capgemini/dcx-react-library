import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Toggle } from '../Toggle';

const DummyToggle = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      checked={checked}
      onChange={e => {
        setChecked(e);
      }}
      onColor="orange"
      offColor="gray"
    />
  );
};

describe('Toggle', () => {
  it('should render a toggle component', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={true}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="gray"
      />
    );
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
  it('should handle the onChange', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={true}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="gray"
      />
    );
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    expect(onChangeHandle).toHaveBeenCalledTimes(1);
  });
  it('should check the toggle', () => {
    render(<DummyToggle />);
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    const check: any = screen.getByRole('switch');
    expect(check.checked).toBeTruthy();
  });
  it('should have a custom on color', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={true}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="gray"
      />
    );
    const checked: any = screen.getByTitle('status-on');
    expect(checked.style).toHaveProperty('background-color', 'orange');
  });
  it('should have a custom off color', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={false}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="red"
      />
    );
    const checked: any = screen.getByTitle('status-off');
    expect(checked.style).toHaveProperty('background-color', 'red');
  });
  it('should have a custom radius', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={false}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="red"
        borderRadius="100px"
      />
    );
    const dragHandler: any = screen.getByTitle('dragswitch-handle');
    expect(dragHandler.style).toHaveProperty('border-radius', '100px');
  });
  it('should be disabled', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={false}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="red"
        borderRadius="100px"
        disabled={true}
      />
    );
    const switcher: any = screen.getByRole('switch');
    expect(switcher.disabled).toBeTruthy();
  });
  it('should have custom on label', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={true}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="red"
        borderRadius="100px"
        customOnLabel={<div>on</div>}
      />
    );
    const labelOn: any = screen.getByTitle('on-label');
    expect(labelOn.innerHTML).toContain('on');
  });
  it('should have custom off label', () => {
    const onChangeHandle = jest.fn();
    render(
      <Toggle
        checked={false}
        onChange={onChangeHandle}
        onColor="orange"
        offColor="red"
        borderRadius="100px"
        customOffLabel={<div>off</div>}
      />
    );
    const labelOn: any = screen.getByTitle('off-label');
    expect(labelOn.innerHTML).toContain('off');
  });
});
