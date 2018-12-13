import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Card = (props) => {
  return (
    <CardStyled>
      {props.children}
    </CardStyled>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
