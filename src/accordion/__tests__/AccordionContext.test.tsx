import { renderHook } from '@testing-library/react';
import { useContext } from 'react';
import AccordionContext from '../AccordionContext';

describe('AccordionContext', () => {
  it('multipleOpen is a boolean', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(typeof result.current.multipleOpen).toBe('boolean');
  });

  it('expanded is an array of strings', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(Array.isArray(result.current.expanded)).toBe(true);
    result.current.expanded.forEach(item => {
      expect(typeof item).toBe('string');
    });
  });

  it('provides default multipleOpen value', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(result.current.multipleOpen).toBe(false);
  });

  it('provides default expanded value', () => {
    const { result } = renderHook(() => useContext(AccordionContext));
    expect(result.current.expanded).toStrictEqual([]);
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
