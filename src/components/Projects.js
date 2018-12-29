import React from 'react';
import styled from 'styled-components';

import Card from './common/Card';
import WebIcon from '../images/icon-web.svg';
import MobileIcon from '../images/icon-mobile.svg';

// when screen width < 925px
const ProjectContainer = styled.div`
    margin: auto 0;
    text-align: center;
    height: 140vh;
    padding: 5em 0;
    background: #8DDBE0;

    @media only screen and (max-width: 925px) {

    }
`;

const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 3em;
    height: 80%;
    margin-bottom: 5em;
`;

const Projects = () => {
    return (
        <ProjectContainer>
            <h2>Previous Projects</h2>
            <ProjectSection>
                <Card>
                    <div style={{ display: 'flex' }}>
                        <p>Project 1</p>
                        <img src={WebIcon} alt="web icon" />
                    </div>
                    <div></div>
                </Card>
            </ProjectSection>
        </ProjectContainer>
    );
}

export default Projects;