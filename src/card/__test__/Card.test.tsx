import React from 'react';
import { Card } from '../Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardHeader } from '../CardHeader';
import { CardContent } from '../CardContent';
import { CardImage } from '../CardImage';
import { CardFooter } from '../CardFooter';
import { CardActions } from '../CardActions';

describe('Card Component', () => {
  const dummyChild = <div>dummy card child</div>;

  it('renders without errors', () => {
    const { getByText } = render(<Card>{dummyChild}</Card>);

    expect(getByText('dummy card child')).toBeInTheDocument();
  });

  it('should allow to pass a custom className', () => {
    const { getByText } = render(
      <Card className="my-card-class">
        <>dummy text</>
      </Card>
    );

    expect(getByText('dummy text')).toBeInTheDocument();
    expect(getByText('dummy text')).toHaveClass('dcx-card my-card-class');
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
    render(
      <Card data-testid="extra-prop">
        <>dummy text</>
      </Card>
    );
    expect(screen.getByTestId('extra-prop')).toBeInTheDocument();
  });

  it('renders provided children', () => {
    render(
      <Card data-testid="card-test-id">
        <CardHeader data-testid="child-test-id" className="dcx-card-header">
          <h4>dummy card header</h4>
        </CardHeader>
        <CardImage
          data-testid="child-test-id"
          className="dcx-card-header"
          src="dummy.jpg"
          alt="alternative"
        />
        <CardContent data-testid="child-test-id" className="dcx-card-content">
          <p>dummy content</p>
        </CardContent>
        <CardActions data-testid="child-test-id" className="dcx-card-actions">
          <button>See more</button>
        </CardActions>
        <CardFooter data-testid="child-test-id" className="dcx-card-footer">
          <div>dummy footer</div>
        </CardFooter>
      </Card>
    );

    const CardComponent = screen.getByTestId('card-test-id');
    expect(CardComponent).toBeInTheDocument();
  });
});

// describe('CardHeader', () => {
//   const dummyChild = <h4>header text</h4>;

//   it('should render without errors', () => {
//     const { container } = render(
//       <CardHeader className="dcx-card-header">{dummyChild}</CardHeader>
//     );
//     expect(container.querySelector('dcx-card-header')).toBeInTheDocument();
//   });

//   it('should render children', () => {
//     render(<CardHeader className="my-custom-class">{dummyChild}</CardHeader>);
//     const childElement = screen.getByText('dummy header');
//     expect(childElement).toBeInTheDocument();
//   });

//   it('should apply a custom className', () => {
//     const { container } = render(
//       <CardHeader className="my-custom-class">{dummyChild}</CardHeader>
//     );
//     expect(container.querySelector('my-custom-class')).toBeInTheDocument();
//   });

//   it('should pass additional props', () => {
//     const additionalProps = {
//       'data-testid': 'custom-test-id',
//       'aria-label': 'custom Label',
//     };

//     const { container } = render(
//       <CardHeader className="my-custom-class" {...additionalProps}>
//         {dummyChild}
//       </CardHeader>
//     );
//     expect(container.querySelector('my-custom-class')).toBeInTheDocument();
//     expect(container).toHaveAttribute('aria-label', 'custom-label');
//   });
// });
