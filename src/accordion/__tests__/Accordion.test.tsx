import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import '@testing-library/jest-dom';
import { AccordionItem } from '../AccordionItem';
import { AccordionTitle } from '../AccordionTitle';
import { AccordionDetails } from '../AccordionDetails';

describe('Accordion Component', () => {
  it('should render correctly with default props', async () => {
    render(
      <Accordion>
       <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Test Details')).not.toBeVisible();
    });
  });

  it('should render correctly with multiOpen props ', async () => {
    render(
      <Accordion multipleOpen>
       <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle title="Test Title 1" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test 1 Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    waitFor(async () => {
      expect(await screen.findByText('Test Details')).not.toBeVisible();
    });
    userEvent.click(screen.getByText('Test Title 1'));

    expect(await screen.findByText('Test 1 Details')).toBeInTheDocument();
  });

  it('should expand the item when its title is clicked', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));

    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should collapse the item when its title is clicked while it is expanded when multiOpen is false', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    userEvent.click(screen.getByText('Test Title'));
    await waitFor(() => {
      expect(screen.queryByText('Test Details')).not.toBeVisible();
    });
  });

  it('should collapse the item when its title is clicked while it is expanded when multiOpen is true', async () => {
    render(
      <Accordion multipleOpen>
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));
    userEvent.click(screen.getByText('Test Title'));
    await waitFor(() => {
      expect(screen.queryByText('Test Details')).not.toBeVisible();
    });
  });

  it('should only allow one item to be expanded at a time by default or when multipleOpen is false', async () => {
    render(
      <Accordion multipleOpen={false}>
        <AccordionItem>
          <AccordionTitle title="Test Title 1" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 1" detailsClassName="test-class" />
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle title="Test Title 2" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 2" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title 1'));
    userEvent.click(screen.getByText('Test Title 2'));
    await waitFor(() => {
      expect(screen.queryByText('Test Details 1')).not.toBeVisible();
      expect(screen.queryByText('Test Details 2')).toBeInTheDocument();
    });
  });

  it('should allow multiple items to be expanded at the same time when multipleOpen is true', async () => {
    render(
      <Accordion multipleOpen={true}>
        <AccordionItem>
          <AccordionTitle title="Test Title 1" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 1" detailsClassName="test-class" />
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle title="Test Title 2" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 2" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title 1'));
    userEvent.click(screen.getByText('Test Title 2'));

    expect(await screen.findByText('Test Details 1')).toBeInTheDocument();
    expect(await screen.findByText('Test Details 2')).toBeInTheDocument();
  });

  it('should not allow multiple items to be expanded at the same time when multipleOpen is false', async () => {
    render(
      <Accordion multipleOpen={false}>
        <AccordionItem>
          <AccordionTitle title="Test Title 1" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 1" detailsClassName="test-class" />
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle title="Test Title 2" expandIcon={<span>▼</span>}/>
          <AccordionDetails details="Test Details 2" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );
  
    userEvent.click(screen.getByText('Test Title 1'));
    userEvent.click(screen.getByText('Test Title 2'));
  
    await waitFor(async () => {
      expect(screen.queryByText('Test Details 1')).not.toBeVisible();
      expect(screen.getByText('Test Details 2')).toBeInTheDocument();
    });
  });
});

describe('Accordion', () => {
  it('should handle click when multipleOpen is false', async () => {
    render(
      <Accordion multipleOpen={false}>
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>} />
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));

    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should handle click when multipleOpen is false and activeTitle matches title', async () => {
    render(
      <Accordion multipleOpen={false} expanded="Test Title">
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>} />
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));

    await waitFor(() => {
      expect(screen.queryByText('Test Details')).not.toBeVisible();
    });
  });

  it('should handle click when multipleOpen is false and activeTitle does not match title', async () => {
    render(
      <Accordion multipleOpen={false} expanded="Another Title">
        <AccordionItem>
          <AccordionTitle title="Test Title" expandIcon={<span>▼</span>} />
          <AccordionDetails details="Test Details" detailsClassName="test-class" />
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByText('Test Title'));

    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should set active title when multipleOpen is true', () => {
    const { getByText } = render(
      <Accordion multipleOpen={true} expanded="Test Title 1">
        <AccordionItem>
          <AccordionTitle title="Test Title 1" />
          <AccordionDetails details="Test Details 1" />
        </AccordionItem>
      </Accordion>
    );
  
    userEvent.click(screen.getByText('Test Title 1'));
    expect(getByText('Test Details 1')).toBeInTheDocument();
  });
  
  it('should clear active title when multipleOpen is false and activeTitle equals title', () => {
    render(
      <Accordion multipleOpen={false} expanded="Test Title 1">
        <AccordionItem>
          <AccordionTitle title="Test Title 1" />
          <AccordionDetails details="Test Details 1" />
        </AccordionItem>
      </Accordion>
    );
  
    userEvent.click(screen.getByText('Test Title 1'));
    waitFor( async () => {
      expect( await screen.getByText('Test Details 1')).not.toBeVisible();
    });
  });
  
  it('should set active title when multipleOpen is false and activeTitle does not equal title', async () => {
    const { getByText } = render(
      <Accordion multipleOpen={false} expanded="Test Title 1">
        <AccordionItem>
          <AccordionTitle title="Test Title 1" />
          <AccordionDetails details="Test Details 1" />
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle title="Test Title 2" />
          <AccordionDetails details="Test Details 2" />
        </AccordionItem>
      </Accordion>
    );
    fireEvent.click(getByText('Test Title 2'));
    expect(await screen.findByText('Test Details 2')).toBeInTheDocument();
  });
});
