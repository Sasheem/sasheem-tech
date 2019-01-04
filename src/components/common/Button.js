import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 0.3em;
    min-width: 5em;
    background: none;
    border: 1px solid black;
    border-radius: 0.3em;
    cursor: pointer;
    width: 10%;
`;

export default Button;