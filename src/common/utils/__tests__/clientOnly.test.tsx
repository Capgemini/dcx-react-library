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
    function subscribe() {
      return () => {};
    }
    function getSnapshot() {
      return () => false
    }
    function getServerSnapshot() {
      return () => false
    }

    mockUseSyncExternalStore.mockImplementation((subscribe(), getSnapshot(), getServerSnapshot()));
  
    let renderedHydratedValue: boolean;

    const TestComponent = () => {
      const hydrated = useHydrated();
      renderedHydratedValue = hydrated;
      return null;
    };

    render(<TestComponent />);

    expect(mockUseSyncExternalStore).toHaveBeenCalled();
    await waitFor(() => {
      expect(renderedHydratedValue).toBe(false);
    });

  })

});
