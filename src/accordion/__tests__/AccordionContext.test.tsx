import { renderHook } from '@testing-library/react';
import { useContext } from 'react';
import AccordionContext from '../AccordionContext';

describe('AccordionContext', () => {
  it('provides default multipleOpen value', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(result.current.multipleOpen).toBe(false);
  });

  it('provides default expanded value', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(result.current.expanded).toBe('');
  });

  it('provides default onClick function', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(typeof result.current.onClick).toBe('function');
  });

  it('default onClick function does not throw', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(() => result.current.onClick('test')).not.toThrow();
  });
});
