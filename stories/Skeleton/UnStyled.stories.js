import { Skeleton } from '../../src/skeleton/Skeleton';

export default {
  title: 'DCXLibrary/Layout/Skeleton/Without style',
  component: Skeleton,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function (args) {
    return (
      <>
        rectangular
        <Skeleton
          variant="rectangular"
          width="250px"
          height="250px"
        />
        <br/>
        circular
        <Skeleton
          variant="circular"
          width="20px"
          height="20px"
        />
        <br/>
        rounded
        <Skeleton
          variant="rounded"
          width="250px"
          height="20px"
        />
        <br/>
        text
        <Skeleton
          variant="text"
          fontSize="1rem"
        />  
      </>
    )
      
  }
};
