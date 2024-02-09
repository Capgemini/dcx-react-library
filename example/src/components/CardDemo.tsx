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
    <Card layout="horizontal" className="card-demo">
      <CardImage
        className="card-demo_image"
        src="https://placehold.co/200"
        alt="card demo image"
      />
      <div className="text-wrapper">
        <CardHeader className="card-demo_header">
          <Heading className="card-demo_heading" level="h4" label="Order ID" />
        </CardHeader>
        <CardContent className="card-demo_content">
          <List type={TYPE_LIST.UNORDERED} className="card-demo_content-list">
            {lisItems.map((i) => (
              <ListItem key={i.id}>{i.name}</ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions className="card-demo_actions">
          <Button type={BUTTON_TYPE.BUTTON}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </CardActions>
      </div>
    </Card>
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
