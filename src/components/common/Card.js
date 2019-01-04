import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  background: white;

  @media only screen and (max-width) {
    background: yellow;
  }
`;

const Card = (props) => {
  return (
    <CardStyled>
      {props.children}
    </CardStyled>
  );
};

export default Card;
