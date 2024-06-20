import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  Skeleton,
  List,
  TYPE_LIST,
  Button,
  BUTTON_TYPE,
  ListItem,
  Paragraph,
  Heading,
  CardActions,
} from '@capgeminiuk/dcx-react-library';

import './skeleton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const lisItems = [
  {
    id: 1,
    name: 'Customer Number',
  },
  {
    id: 2,
    name: 'Dates of Sales',
  },
  {
    id: 3,
    name: 'Department',
  },
  {
    id: 4,
    name: 'Sale Cost (£)',
  },
  {
    id: 5,
    name: 'Status',
  },
];

export const SkeletonDemo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="dcx-skeleton-container">
      <Card layout="vertical">
        {loading ? (
          <>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="250px"
              height="250px"
            />
            {lisItems.map((i) => {
              return (
                <Skeleton
                  key={i.id}
                  variant="text"
                  fontSize="1rem"
                  animation="wave"
                />
              );
            })}
          </>
        ) : (
          <>
            <CardImage src="https://placehold.co/200" alt="card demo image" />
            <div className="text-wrapper">
              <CardHeader>
                <Heading
                  className="card-heading-text"
                  level="h4"
                  label="Order ID"
                />
              </CardHeader>
              <CardContent>
                <List type={TYPE_LIST.UNORDERED} className="card-content-list">
                  {lisItems.map((i) => (
                    <ListItem key={i.id}>{i.name}</ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button type={BUTTON_TYPE.BUTTON}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </CardActions>
            </div>
          </>
        )}
      </Card>
      <Card layout="horizontal">
        {loading ? (
          <>
            <div
              style={{
                display: 'flex',
                gap: '4rem',
                justifyContent: 'space-between',
              }}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="200px"
                height="200px"
              />

              <div>
                {lisItems.map((i) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Skeleton
                        key={i.id}
                        variant="rounded"
                        width="250px"
                        height="20px"
                        animation="wave"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <CardImage src="https://placehold.co/200" alt="card demo image" />
            <div className="text-wrapper">
              <CardHeader>
                <Heading
                  className="card-heading-text"
                  level="h4"
                  label="Order ID"
                />
              </CardHeader>
              <CardContent>
                <List type={TYPE_LIST.UNORDERED} className="card-content-list">
                  {lisItems.map((i) => (
                    <ListItem key={i.id}>{i.name}</ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button type={BUTTON_TYPE.BUTTON}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </CardActions>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
