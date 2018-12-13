import React from 'react';
import styled from 'styled-components';

const ProjectLinkStyled = styled.a`
    font-size: 1em;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.4em;
    border-radius: 0.3em;
    
`;

const ProjectLink = (props) => {
    return (
        <ProjectLinkStyled href={props.destination}>{props.children}</ProjectLinkStyled>
    );
};

export default ProjectLink;