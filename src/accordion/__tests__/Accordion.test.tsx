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
      <Accordion multipleOpen={true}>
        <AccordionItem>
          <AccordionTitle id="1">
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails id="1">
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should handle click when multipleOpen is false and title is already active', async () => {
    render(
      <Accordion multipleOpen={false} expanded={['12']}>
        <AccordionItem>
          <AccordionTitle id="12">
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails id="12">
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    await waitFor(() => {
      expect(screen.queryByText('Test Details')).not.toBeVisible();
    });
  });

  it('should handle click when multipleOpen is false and title is not active', async () => {
    render(
      <Accordion multipleOpen={false} expanded={[]}>
        <AccordionItem>
          <AccordionTitle id="13">
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails id="13">
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
      <Accordion multipleOpen expanded={['14', '22']}>
        <AccordionItem>
          <AccordionTitle id="14">
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails id="14">
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="22">
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails id="22">
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="31">
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails id="31">
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
    render(
      <Accordion multipleOpen expanded={['41', '52']}>
        <AccordionItem>
          <AccordionTitle id="41">
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails id="41">
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="52">
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails id="52">
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="43">
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails id="43">
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title 1'));

    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).not.toBeVisible();
      expect(screen.queryByText('Test Details 2')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 3')).not.toBeVisible();
    });
  });
});

describe('Accordion Component', () => {
  it('should collapse the item when multipleOpen is true and the item is clicked again', async () => {
    render(
      <Accordion multipleOpen={true} expanded={['item1']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 1'));

    await waitFor(() => {
      expect(screen.getByText('Details 1')).not.toBeVisible();
      expect(screen.getByText('Details 2')).not.toBeVisible();
    });
  });

  it('should collapse the item when multipleOpen is false and the item is clicked again', async () => {
    render(
      <Accordion expanded={['item1']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 1'));

    await waitFor(() => {
      expect(screen.getByText('Details 1')).not.toBeVisible();
    });
  });

  it('should only expand the first item when multipleOpen is false and expanded has more than one item', () => {
    render(
      <Accordion expanded={['item1', 'item2']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Details 1')).toBeVisible();
    expect(screen.getByText('Details 2')).not.toBeVisible();
  });

  it('should expand the item when multipleOpen is true and the item is not expanded', async () => {
    render(
      <Accordion multipleOpen={true} expanded={['item1']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 2'));

    await waitFor(() => {
      expect(screen.getByText('Details 1')).toBeVisible();
      expect(screen.getByText('Details 2')).toBeVisible();
    });
  });

  it('should expand the item when multipleOpen is false and the item is not expanded', async () => {
    render(
      <Accordion multipleOpen={false} expanded={['item1']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Item 2'));

    await waitFor(() => {
      expect(screen.getByText('Details 2')).toBeVisible();
    });
  });

  it('should handle click when multipleOpen is false and no item is already active', async () => {
    render(
      <Accordion expanded={[]}>
        <AccordionItem>
          <AccordionTitle id="1">
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails id="1">
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="2">
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails id="2">
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="3">
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails id="3">
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title 3'));

    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).not.toBeVisible();
      expect(screen.queryByText('Test Details 2')).not.toBeVisible();
      expect(screen.queryByText('Test Details 3')).toBeInTheDocument();
    });
  });

  it('should handle click when multipleOpen is true and items are already active', async () => {
    render(
      <Accordion multipleOpen expanded={['41', '52']}>
        <AccordionItem>
          <AccordionTitle id="41">
            <>Test Title 1</>
          </AccordionTitle>
          <AccordionDetails id="41">
            <>Test Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="52">
            <>Test Title 2</>
          </AccordionTitle>
          <AccordionDetails id="52">
            <>Test Details 2</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="43">
            <>Test Title 3</>
          </AccordionTitle>
          <AccordionDetails id="43">
            <>Test Details 3</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );

    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 2')).toBeInTheDocument();
      expect(screen.queryByText('Test Details 3')).not.toBeVisible();
    });
  });

  it('should only expand the first item when multipleOpen is false and expanded has more than one item', async () => {
    render(
      <Accordion expanded={['item2', 'item1']}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
    await waitFor(() => {
      expect(screen.queryByText('Details 2')).toBeInTheDocument();
      expect(screen.queryByText('Details 1')).not.toBeVisible();
    });
  });

  //test to implement
  it('should allow to style every title passing the titleClassName at the root component', () => {
    render(
      <Accordion titleClassName="titleClassNames">
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  });

  //test to implement
  it('should allow to style every title passing the titleClassName at the root component', () => {
    render(
      <Accordion detailsClassName="detailsClassNames">
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  });

  //test to implement
  it('should allow to specify an expandIcon at the root level and to be visible in every component', () => {
    render(
      <Accordion expandIcon={<span>&#94;</span>}>
        <AccordionItem>
          <AccordionTitle id="item1">
            <>Item 1</>
          </AccordionTitle>
          <AccordionDetails id="item1">
            <>Details 1</>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="item2">
            <>Item 2</>
          </AccordionTitle>
          <AccordionDetails id="item2">
            <>Details 2</>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  });
});
