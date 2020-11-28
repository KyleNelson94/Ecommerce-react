import * as React from 'react';
import styled from 'styled-components';

interface Props {
  rows: number;
  columns: number;
  children: object;
};

const Row = styled.div`
  width: 100%;
  border: 5px solid red;
`;

const Column = styled.div`

  width: 100%;
  border: 5px solid yellow;
`;

const Grid = ({ rows, columns, children }: Props) => {
  const rowCalc = null;
  const columnsCalc = null;

  return (
    <Row>
      <Column>
        <h2>Hello Collumn</h2>
      </Column>
      <Column>
        <h2>Hello Collumn</h2>
      </Column>
      <Column>
        <h2>Hello Collumn</h2>
      </Column>
      <Column>
        <h2>Hello Collumn</h2>
      </Column>
      <Column>
        <h2>Hello Collumn</h2>
      </Column>
    </Row>
  );
}

export default Grid;