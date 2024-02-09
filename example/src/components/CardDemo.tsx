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
} from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './cardDemo.scss';

export const CardDemo = () => {
  return (
    <div className="demo-cards-container">
      <h1>Horizontal card example</h1>
      <Card layout="horizontal" className="horizontal-card-demo">
        <CardImage
          className="horizontal-card_image"
          src="https://placehold.co/200"
          alt="card demo image"
        />
        <div className="text-wrapper">
          <CardHeader className="horizontal-card_header">
            <Heading
              className="horizontal-card_heading"
              level="h4"
              label="Order ID"
            />
          </CardHeader>
          <CardContent className="horizontal-card_content">
            <List
              type={TYPE_LIST.UNORDERED}
              className="horizontal-card_content-list"
            >
              {lisItems.map((i) => (
                <ListItem key={i.id}>{i.name}</ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions className="horizontal-card_actions">
            <Button type={BUTTON_TYPE.BUTTON}>
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </CardActions>
        </div>
      </Card>
      <h1>Vertical card example</h1>
      <Card layout="vertical" className="vertical-card-demo">
        <CardImage
          className="vertical-card_image"
          src="https://placehold.co/200"
          alt="card demo image"
        />
        <div className="text-wrapper">
          <CardHeader className="vertical-card_header">
            <Heading
              className="vertical-card_heading"
              level="h4"
              label="Order ID"
            />
          </CardHeader>
          <CardContent className="vertical-card_content">
            <List
              type={TYPE_LIST.UNORDERED}
              className="vertical-card_content-list"
            >
              {lisItems.map((i) => (
                <ListItem key={i.id}>{i.name}</ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions className="vertical-card_actions">
            <Button type={BUTTON_TYPE.BUTTON}>
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </CardActions>
        </div>
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
