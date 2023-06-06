import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ClientOnly, useHydrated } from '../clientOnly';
import * as hooks from '../clientOnly';

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
});


describe('ClientOnly component', () => {
  it('should render children when hydrated', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const { container } = render(
      <ClientOnly fallback={<div id="fallbackId">Fallback</div>}>
        {() => <div id="contentId">Content</div>}
      </ClientOnly>
    );

    expect(container.querySelector('#contentId')).toBeInTheDocument();
    expect(container.querySelector('#fallbackId')).not.toBeInTheDocument();
  });

  it('should render fallback when not hydrated', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);

    const { container } = render(
      <ClientOnly fallback={<div id="fallbackId">Fallback</div>}>
        {() => <div id="contentId">Content</div>}
      </ClientOnly>
    );

    expect(container.querySelector('#fallbackId')).toBeInTheDocument();
    expect(container.querySelector('#contentId')).not.toBeInTheDocument();
  });

  it('should render children when hydrated even when fallback is missing', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const { container } = render(
      <ClientOnly>
        {() => <div id="contentId">Content</div>}
      </ClientOnly>
    );

    expect(container.querySelector('#contentId')).toBeInTheDocument();
  });
});