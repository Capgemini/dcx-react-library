import { Heading } from '../../src/heading/Heading';

export default {
  title: 'DCXLibrary/Typography/Heading/Without style',
  component: Heading,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function() {
    return (
      <Heading label="This is the content of the heading" level="h1">
        <div>
          <p> This is a child component that is part of the heading </p>
        </div>
      </Heading>
    );
  },
};
