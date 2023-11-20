import React from 'react';
import { DescriptionList, Term, Detail } from '@capgeminiuk/dcx-react-library';
import './DescriptionList.scss';

export const DescriptionListDemo = () => {
  return (
    <div>
      <h1>Demo of Description List</h1>
      <div>
        <h3>Description List</h3>
        <DescriptionList>
          <Term>Coffee</Term>
          <Detail>- black hot drink</Detail>
          <Term>Milk</Term>
          <Detail>- white cold drink</Detail>
        </DescriptionList>
      </div>

      <div>
        <h3>
          Description List with className, termClassName and detailClassName
        </h3>
        <DescriptionList
          detailClassName="detailClass"
          termClassName="termClass"
          className="dlClass"
        >
          <Term>Coffee</Term>
          <Detail>- black hot drink</Detail>
          <Term>Milk</Term>
          <Detail>- white cold drink</Detail>
        </DescriptionList>
      </div>

      <div>
        <h3>Description List when extra props are passed</h3>
        <DescriptionList descListProps={{ style: { background: '#29bdc1' } }}>
          <Term termProps={{ style: { textDecoration: 'underline' } }}>
            Coffee
          </Term>
          <Detail detailProps={{ style: { color: 'blue' } }}>
            - black hot drink
          </Detail>
          <Term>Milk</Term>
          <Detail>- white cold drink</Detail>
        </DescriptionList>
      </div>
      <DescriptionList
        className="myStyle"
        descListProps={{ style: { color: 'red' } }}
        detailClassName="myStyle"
        termClassName="myStyle"
      >
        <Term className="myStyle" termProps={{ style: { color: 'red' } }}>
          Coffee
        </Term>
        <Detail className="myStyle" detailProps={{ style: { color: 'red' } }}>
          - black hot drink
        </Detail>
        <Term>Milk</Term>
        <Detail>- white cold drink</Detail>
      </DescriptionList>
    </div>
  );
};

export default DescriptionListDemo;
