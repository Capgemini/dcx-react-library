import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {
  Card,
  CardHeader,
  CardImage,
  CardContent,
  CardActions,
} from '../../src/card';

const CardDemo = `
function CardDemo() {
   

  return (
    <Card className="horizontal-card" layout="horizontal">
        <CardImage
          className="horizontal-card__image"
          src="https://placehold.co/200x200"
          alt="alt card image"
        />
        <div className="text-wrapper">
          <CardHeader className="horizontal-card__header">John Doe</CardHeader>
          <CardContent className="horizontal-card__content">
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </CardContent>
          <CardActions className="horizontal-card__actions">
            <button>See more</button>
          </CardActions>
        </div>
      </Card>
  )
}
`.trim();

const CardLive = () => {
  const scope = { Card, CardHeader, CardImage, CardContent, CardActions };
  return (
    <LiveProvider code={CardDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default CardLive;
