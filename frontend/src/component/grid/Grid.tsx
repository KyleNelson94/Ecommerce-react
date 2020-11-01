import * as React from 'react';
import styled from 'styled-components';

interface Props {
  rows: number;
  columns: number;
  children: object;
};

const Row = styled.div`
  width: 100%;
`;

const Grid = ({ rows, columns, children }: Props) => {
  const rowCalc = null;
  const columnsCalc = null;

  return (
    <Row>

    </Row>
  );
}

export default Grid;