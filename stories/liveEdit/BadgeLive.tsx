import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Badge } from '../../src/badge/Badge';
import { Avatar } from '../../src/avatar/Avatar';

const BadgeDemo = `
function BadgeDemo() {
  return (
    <Badge
      dot={false}
      badgeContents={'4'}
      containerClassName=''
      badgeClassName=''
      contentsClassName=''
      verticalAlignment='top'
      horizontalAlignment='right'
    >
      <Avatar alt='alt' style={{
        backgroundColor: '#663399',
        color: 'white'
      }}>JB</Avatar>
    </Badge>
  )
}
`.trim();

const BadgeLive = () => {
  const scope = { Avatar, Badge };
  return (
    <LiveProvider code={BadgeDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default BadgeLive;
