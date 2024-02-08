import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardImage,
  CardFooter,
} from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './cardDemo.scss';

export const CardDemo = () => {
  return (
    <Card layout="horizontal" className="card-demo">
      <CardImage
        className="card-demo-image"
        src="https://placehold.co/200"
        alt="card demo image"
      />
      <div className="text-wrapper">
        <CardHeader className="card-demo-header">
          <h4>Order ID</h4>
        </CardHeader>
        <CardContent className="card-demo-content">
          <li>
            <ul>Customer Number</ul>
            <ul>Date of Sales</ul>
            <ul>Department</ul>
            <ul>Sale Cost {'(£)'}</ul>
            <ul>Status</ul>
          </li>
        </CardContent>
        <CardActions className="card-demo-actions">
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </CardActions>
      </div>
    </Card>
  );
};
