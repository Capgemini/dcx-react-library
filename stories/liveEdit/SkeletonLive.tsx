import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Skeleton } from '../../src/skeleton/Skeleton';

const SkeletonDemo = `
function SkeletonDemo() {

  return (
    <Skeleton
        variant="rectangular"
        animation="wave"
        width="250px"
        height="50px"
    />
  )
}
`.trim();

const SkeletonLive = () => {
  const scope = { Skeleton };
  return (
    <LiveProvider code={SkeletonDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default SkeletonLive;
