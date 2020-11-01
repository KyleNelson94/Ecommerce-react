import * as React from 'react';
import {CardContainer, CardBody, CardImage, CardTitle} from './styles';

interface Props {
  image: string;
  title: string;
  body: string;
  dateCreated: string;
  price: number;
  productId: number;
};

function Card ({image, title, body, dateCreated, price, productId}:Props) {

  return (
    <CardContainer>
      <CardImage />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        
      </CardBody>
    </CardContainer>
  );
};

export default Card;