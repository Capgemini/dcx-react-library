import React from 'react';
import { Card } from '../Card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardHeader } from '../CardHeader';
import { CardContent } from '../CardContent';
import { CardImage } from '../CardImage';
import { CardFooter } from '../CardFooter';
import { CardActions } from '../CardActions';

describe('Card Component', () => {
  const dummyChild = <div>dummy card child</div>;

  it('renders without errors', () => {
    const { container } = render(<Card>{dummyChild}</Card>);

    expect(container.querySelector('.dcx-card')).toBeInTheDocument();
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <Card className="my-card-class">
        <>dummy text</>
      </Card>
    );

    expect(container.querySelector('.dcx-card')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card')).toHaveClass(
      'dcx-card my-card-class'
    );
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByText } = render(
      <Card>
        <>dummy text</>
      </Card>
    );

    expect(getByText('dummy text')).toBeInTheDocument();
    expect(getByText('dummy text')).toHaveClass('dcx-card');
  });

  it('should allow to pass extra props', () => {
    const { container } = render(
      <Card aria-label="card aria label">
        <>dummy text</>
      </Card>
    );
    expect(container.querySelector('.dcx-card')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card')).toHaveAttribute(
      'aria-label',
      'card aria label'
    );
  });

  it('renders provided children', () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <h4>dummy card header</h4>
        </CardHeader>
        <CardImage src="dummy.jpg" alt="alternative" />
        <CardContent>
          <p>dummy content</p>
        </CardContent>
        <CardActions>
          <button>See more</button>
        </CardActions>
        <CardFooter>
          <div>dummy footer</div>
        </CardFooter>
      </Card>
    );

    const parent = container.querySelector('.dcx-card');
    expect(parent).toBeInTheDocument();
    expect(parent?.children.length).toBe(5);
  });
});
