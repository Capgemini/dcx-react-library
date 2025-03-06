import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import '@testing-library/jest-dom';
import { AccordionItem } from '../AccordionItem';
import { AccordionTitle } from '../AccordionTitle';
import { AccordionDetails } from '../AccordionDetails';

describe('Accordion Component', () => {
  it('should handle click when multipleOpen is true and title is not active', async () => {
    render(
      <Accordion multipleOpen={true} expanded={[]}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should handle click when multipleOpen is false and title is already active', async () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={['1']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const detailsElement = container.querySelector(
      '.dcx-accordion-details'
    ) as HTMLDivElement;

    userEvent.click(screen.getByText('Test Title'));
    await waitFor(() => {
      expect(detailsElement.getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('should handle click when multipleOpen is false and title is not active', async () => {
    render(
      <Accordion multipleOpen={false} expanded={[]}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should handle click when multipleOpen is true and titles are already active', async () => {
    render(
      <Accordion multipleOpen expanded={['1', '2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="3">
          <AccordionTitle>
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title 3'));

    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 2')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 3')).toBeInTheDocument();
    });
  });

  it('should handle click when multipleOpen is true and items are already active', async () => {
    const { container } = render(
      <Accordion multipleOpen expanded={['1', '2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="3">
          <AccordionTitle>
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    userEvent.click(screen.getByText('Test Title 1'));

    await waitFor(() => {
      expect(detailsElement[0].getAttribute('aria-expanded')).toBe('false');
      expect(detailsElement[1].getAttribute('aria-expanded')).toBe('true');
      expect(detailsElement[2].getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('expands the correct item when the expanded prop changes', () => {
    const { rerender, container } = render(
      <Accordion expanded={['1']} multipleOpen={false}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 1 Details</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 2 Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    expect(detailsElement[0].getAttribute('aria-expanded')).toBe('true');

    rerender(
      <Accordion multipleOpen={false} expanded={['2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 1 Details</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 2 Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('true');
  });

  it('should expand the correct item when the multipleOpen and expanded prop changes', () => {
    const { rerender } = render(
      <Accordion expanded={['1']} multipleOpen={false}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 1 Details</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 2 Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Section 1 Details')).toBeVisible();

    rerender(
      <Accordion expanded={['2']} multipleOpen={true}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 1 Details</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Section 2 Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Section 2 Details')).toBeVisible();
  });
});

describe('Accordion Component', () => {
  it('should collapse the item when multipleOpen is true and the item is clicked again', async () => {
    const { container } = render(
      <Accordion multipleOpen={true} expanded={['1']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelector(
      '.dcx-accordion-details'
    ) as HTMLDivElement;

    fireEvent.click(screen.getByText('Item 1'));

    await waitFor(() => {
      expect(detailsElement.getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('should collapse the item when multipleOpen is false and the item is clicked again', async () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={['1']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelector(
      '.dcx-accordion-details'
    ) as HTMLDivElement;
    userEvent.click(screen.getByText('Item 1'));
    await waitFor(() => {
      expect(detailsElement.getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('should only expand the first item when multipleOpen is false and expanded has more than one item', () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={['1', '2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    expect(detailsElement[0].getAttribute('aria-expanded')).toBe('true');
    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');
  });

  it('should expand the item when multipleOpen is true and the item is not expanded', async () => {
    const { container } = render(
      <Accordion multipleOpen={true} expanded={['1']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 2'));

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    await waitFor(() => {
      expect(detailsElement[1].getAttribute('aria-expanded')).toBe('true');
    });
  });

  it('should expand the item when multipleOpen is false and the item is not expanded', async () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={['1']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 2'));

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    await waitFor(() => {
      expect(detailsElement[1].getAttribute('aria-expanded')).toBe('true');
    });
  });

  it('should handle click when multipleOpen is false and no item is already active', async () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={[]}>
        <AccordionItem title="Test Title 1">
          <AccordionTitle>
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="Test Title 2">
          <AccordionTitle>
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="Test Title 3">
          <AccordionTitle>
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    userEvent.click(screen.getByText('Test Title 3'));

    await waitFor(() => {
      expect(detailsElement[0].getAttribute('aria-expanded')).toBe('false');
      expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');
      expect(detailsElement[2].getAttribute('aria-expanded')).toBe('true');
    });
  });

  it('should handle click when multipleOpen is true and items are already active', async () => {
    const { container } = render(
      <Accordion multipleOpen expanded={['41', '52']}>
        <AccordionItem title="Test Title 1">
          <AccordionTitle>
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="Test Title 2">
          <AccordionTitle>
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="Test Title 3">
          <AccordionTitle>
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 2')).toBeInTheDocument();
      expect(detailsElement[2].getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('should only expand the first item when multipleOpen is false and expanded has more than one item', async () => {
    const { container } = render(
      <Accordion multipleOpen={false} expanded={['1', '2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails>
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;
    await waitFor(() => {
      expect(detailsElement[0].getAttribute('aria-expanded')).toBe('true');
      expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');
    });
  });

  it('should allow to style every title passing the titleClassName and detailsClassName at the root component', () => {
    const titleClassName = 'test-title-class';
    const detailsClassName = 'test-details-class';
    render(
      <Accordion
        multipleOpen={false}
        expanded={[]}
        titleClassName={titleClassName}
        detailsClassName={detailsClassName}
      >
        <AccordionItem title="1">
          <AccordionTitle>
            <span>Item 1</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 1</span>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <span>Item 2</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 2</span>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const titles = screen.getAllByText(/Item/);
    const titlesWithClass = titles.filter(
      (title) =>
        title.parentElement &&
        title.parentElement.classList.contains(titleClassName)
    );
    expect(titlesWithClass.length).toBe(2);
  });

  it('should allow to specify an expandIcon at the root level and to be visible in every component when it is expanded', () => {
    const expandIcon = <span data-testid="expand-icon">+</span>;
    render(
      <Accordion multipleOpen expandIcon={expandIcon} expanded={['1', '2']}>
        <AccordionItem title="1">
          <AccordionTitle>
            <span>Item 1</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 1</span>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <span>Item 2</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 2</span>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    const expandIcons = screen.getAllByTestId('expand-icon');
    expect(expandIcons.length).toBe(2);
  });

  it('should allow to specify a collapseIcon at the root level and to be visible in every component when it is collapsed', () => {
    const collapseIcon = <span data-testid="collapse-icon">-</span>;
    render(
      <Accordion collapsedIcon={collapseIcon}>
        <AccordionItem title="1">
          <AccordionTitle>
            <span>Item 1</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 1</span>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <span>Item 2</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 2</span>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const collapseIcons = screen.getAllByTestId('collapse-icon');
    expect(collapseIcons.length).toBe(2);
  });

  it('should open or close the accordion if the accordion title is clicked', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem title="1">
          <AccordionTitle>
            <span>Item 1</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 1</span>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <span>Item 2</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 2</span>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(screen.getByText('Item 2'));
    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(screen.getByText('Item 2'));
    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');
  });

  it('should not open or close the accordion if the accordion details are clicked', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem title="1">
          <AccordionTitle>
            <span>Item 1</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 1</span>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <span>Item 2</span>
          </AccordionTitle>
          <AccordionDetails>
            <span>Details 2</span>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    const detailsElement = container.querySelectorAll(
      '.dcx-accordion-details'
    ) as NodeListOf<HTMLDivElement>;

    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(screen.getByText('Details 2'));
    expect(detailsElement[1].getAttribute('aria-expanded')).toBe('false');
  });
  it('should call onClick function when accordion is clicked', async () => {
    const mockOnClick = jest.fn();

    render(
      <Accordion onClick={mockOnClick}>
        <AccordionItem title="1">
          <AccordionTitle>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    await userEvent.click(screen.getByText('Test Title'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
