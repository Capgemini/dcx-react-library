import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardImage,
  Heading,
  List,
  TYPE_LIST,
  Button,
  BUTTON_TYPE,
  ListItem,
  Paragraph,
} from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './cardDemo.scss';

export const CardDemo = () => {
  return (
    <div className="demo-cards-container">
      <h1>Horizontal card example</h1>
      <Card layout="horizontal">
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
      </Card>
      <h1>Vertical card example</h1>
      <Card layout="vertical">
        <CardImage src="https://placehold.co/200" alt="card demo image" />
        <div className="text-wrapper">
          <CardHeader>
            <Heading className="heading-text" level="h4" label="Order ID" />
          </CardHeader>
          <CardContent>
            <List type={TYPE_LIST.UNORDERED} className="content-list">
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
      </Card>
      <h1>Vertical card example, social-like post</h1>
      <Card layout="vertical" className="social-card-demo">
        <CardHeader className="card-user-info">
          <CardImage
            className="card-user_image"
            src="https://placehold.co/40"
            alt="card demo image"
          />
          <div className="card-user_heading">
            <Heading level="h4" label="Shiba Inu" />
            <Heading level="h6" label="Dog breed" />
          </div>
        </CardHeader>
        <CardImage
          className="post-image"
          src="https://placehold.co/200x160"
          alt="post image"
        />
        <CardContent className="social-card_content">
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa. Morbi luctus
            consequat felis, eget sagittis nisi vestibulum sed.
          </Paragraph>
        </CardContent>
        <CardActions className="social-card_actions">
          <Button type={BUTTON_TYPE.BUTTON} label="LIKE"></Button>
          <Button type={BUTTON_TYPE.BUTTON} label="SHARE"></Button>
        </CardActions>
      </Card>
      <h1>Interactive card variant</h1>
      <Card variant="interact">
        <CardHeader>
          <Heading className="heading-text" level="h4" label="Article title" />
        </CardHeader>
        <CardImage src="https://placehold.co/200" alt="card demo image" />
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quam
            placeat in...
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

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
