import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ResultList } from '../ResultList';

describe('ResultList', () => {
  it('should display the result content', () => {
    const handleClick = jest.fn();
    render(
      <ResultList
        list={['daniele', 'isaac']}
        userInput="d"
        activeOption={1}
        onClick={handleClick}
      />
    );
    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].innerHTML).toBe('daniele');
    expect(listItems[1].innerHTML).toBe('isaac');
  });

  it('should display the empty content', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ResultList
        list={[]}
        userInput="da"
        activeOption={1}
        onClick={handleClick}
      />
    );
    const noOptionTag: any = container.querySelector('em');
    expect(noOptionTag.innerHTML).toBe('No Option!');
  });

  it('should display optional properties', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ResultList
        list={['daniele', 'isaac']}
        userInput="d"
        activeOption={1}
        onClick={handleClick}
        ulContainerId="ulContainerId"
        ulContainerClass="ulContainerClass"
        liContainerClass="liContainerClass"
        noOptionClass="noOptionClass"
      />
    );
    const ulEl: HTMLUListElement | null = container.querySelector('ul');
    const liEl: HTMLLIElement | null = container.querySelector('li');
    const el: Element | null = container.querySelector('#ulContainerId');
    expect(ulEl?.className).toBe('ulContainerClass');
    expect(liEl?.className).toBe('liContainerClass');
    expect(el?.getAttribute('id')).toBe('ulContainerId');
  });

  it('should display optional properties when empty', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ResultList
        list={[]}
        userInput="d"
        activeOption={1}
        onClick={handleClick}
        noOptionClass="noOptionClass"
      />
    );
    const emEl: any = container.querySelector('div');
    expect(emEl.className).toBe('noOptionClass');
  });

  it('should display empty custom text', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ResultList
        list={[]}
        userInput="d"
        activeOption={1}
        onClick={handleClick}
        noOptionClass="noOptionClass"
        noElFoundText="nada de nada"
      />
    );
    const emEl: any = container.querySelector('em');
    expect(emEl.innerHTML).toBe('nada de nada');
  });
});
