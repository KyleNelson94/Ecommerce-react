import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  margin: 0.25rem;
  background: ${props => props.theme.white};
`;

const CardBody = styled.div`
  padding: 1.5rem 0;
`;

const CardImage = styled.div``;

const CardTitle = styled.h2`
  color: ${props => props.theme.secondaryColor};
  font-size: 1.75rem;
`;

export {CardContainer, CardBody, CardImage, CardTitle};