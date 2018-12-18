import React from 'react';
import styled from 'styled-components';

const CardSectionStyled = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 0.5em;
  padding-top: 0.3em;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  background: white;
`;

const CardSection = (props) => {
  return (
    <CardSectionStyled>
      {props.children}
    </CardSectionStyled>
  );
};

export default CardSection;
