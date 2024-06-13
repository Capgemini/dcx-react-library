import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useHydrated } from '../clientOnly';

describe('useHydrated hook', () => {
  it('should return true after hydration', async () => {
    let renderedHydratedValue: boolean;

    const TestComponent = () => {
      const hydrated = useHydrated();
      renderedHydratedValue = hydrated;
      return null;
    };

    render(<TestComponent />);

    await waitFor(() => {
      expect(renderedHydratedValue).toBe(true);
    });
  });

  it('should test the useSyncExternalStore function', async () => {
    const mockUseSyncExternalStore = jest.spyOn(React, 'useSyncExternalStore');
    //@ts-ignore
    const mockFunction = (subscribe: any, param1: any, param2: any) => param2();
    mockUseSyncExternalStore.mockImplementation(mockFunction);

    let renderedHydratedValue: boolean | undefined = undefined;

    const TestComponent = () => {
      const hydrated = useHydrated();
      renderedHydratedValue = hydrated;
      return null;
    };

    render(<TestComponent />);

    expect(mockUseSyncExternalStore).toHaveBeenCalled();
    expect(renderedHydratedValue).toBe(false);
  });
});
