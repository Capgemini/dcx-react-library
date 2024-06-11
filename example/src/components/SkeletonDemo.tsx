import React from 'react';
import { Skeleton } from '@capgeminiuk/dcx-react-library';
import './skeleton.scss';

export const SkeletonDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Skeleton
        variant="circular"
        animation="pulsate"
        width="100px"
        height="100px"
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        width="500px"
        height="40px"
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        width="500px"
        height="50px"
      />
    </div>
  );
};
