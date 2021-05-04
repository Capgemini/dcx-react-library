import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Selected } from '../Selected';

describe('Selected', () => {
  it('should render a selected', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render a selected label', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    expect(
      within(screen.getByRole('listitem')).getByRole('presentation')
    ).toBeInTheDocument();
  });

  it('should render a selected remove button', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    expect(
      within(screen.getByRole('listitem')).getByRole('button')
    ).toBeInTheDocument();
  });

  it('should render a selected with styling', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
        style={{
          color: 'blanchedalmond',
        }}
      />
    );

    const style: CSSStyleDeclaration = window.getComputedStyle(
      screen.getByRole('listitem')
    );

    expect(style.color).toBe('blanchedalmond');
  });

  it('should call click handler when remove button is clicked', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    userEvent.click(screen.getByRole('button'));

    expect(onRemoveHandler).toHaveBeenCalled();
    expect(onRemoveHandler).toHaveBeenCalledWith({
      id: 'select 1',
      label: 'this is the first selected select',
      value: 'this is the value of the selected select',
    });
  });

  it('should call keyDown handler when code is 13', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter', code: 13 });

    expect(onRemoveHandler).toHaveBeenCalled();
    expect(onRemoveHandler).toHaveBeenCalledWith({
      id: 'select 1',
      label: 'this is the first selected select',
      value: 'this is the value of the selected select',
    });
  });

  it('should not call keyDown handler when code is not 13', () => {
    const onRemoveHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Esc', code: 27 });

    expect(onRemoveHandler).not.toHaveBeenCalled();
  });

  it('should call given on focus handler when focused', () => {
    const onRemoveHandler = jest.fn();
    const onFocusHandler = jest.fn();

    render(
      <Selected
        onRemove={onRemoveHandler}
        onFocus={onFocusHandler}
        select={{
          id: 'select 1',
          label: 'this is the first selected select',
          value: 'this is the value of the selected select',
        }}
      />
    );

    screen.getByRole('button').focus();
    expect(onFocusHandler).toHaveBeenCalled();
  });
});
