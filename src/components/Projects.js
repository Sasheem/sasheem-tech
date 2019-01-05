import React from 'react';
import styled from 'styled-components';

import Card from './common/Card';
import Button from './common/Button';
import WebIcon from '../images/icon_web_white_18dp.png';
import MobileIcon from '../images/icon_iphone_white_18dp.png';

const Projects = () => {
    return (
        <ProjectContainer>
            <h2>Previous Projects</h2>
            <ProjectSection>
                <Card>
                    <CardTop>
                        <CardTitle>Information: Homelessness</CardTitle>
                        <CardIcon src={WebIcon} alt="web icon" />
                    </CardTop>
                    <CardBottom>
                        <p>HTML/CSS/Javascript - Flex</p>
                    </CardBottom>
                </Card>
                <Card>
                    <CardTop>
                        <CardTitle>React App: Pictures</CardTitle>
                        <CardIcon src={WebIcon} alt="web icon" />
                    </CardTop>
                    <CardBottom>
                        <p>React - Javascript - Unsplash API</p>
                    </CardBottom>
                </Card>
                <Card>
                    <CardTop>
                        <CardTitle>Nonprofit: Unhoused Humanity</CardTitle>
                        <CardIcon src={WebIcon} alt="web icon" /> 
                    </CardTop>
                    <CardBottom>
                        <p>HTML/CSS/Javascript - SquareSpace</p>
                    </CardBottom>
                </Card>
                <Card>
                    <CardTop>
                        <CardTitle>Chat Application</CardTitle>
                        <CardIcon src={WebIcon} alt="web icon" />
                    </CardTop>
                    <CardBottom>
                        <p>NodeJS - Javascript - ExpressJS</p>
                    </CardBottom>
                </Card>
                <Card>
                    <CardTop>
                        <CardTitle>Manager App</CardTitle>
                        <CardIcon src={MobileIcon} alt="mobile icon" />
                    </CardTop>
                    <CardBottom>
                        <p>React Native - Firebase - Redux</p>
                    </CardBottom>
                </Card>
                <Card>
                    <CardTop>
                        <CardTitle>Tinder Swipe Clone</CardTitle>
                        <CardIcon src={MobileIcon} alt="mobile icon" />
                    </CardTop>
                    <CardBottom>
                        <p>React Native - Animations</p>
                    </CardBottom>
                </Card>
            </ProjectSection>
            {/* <Button>See More</Button> */}
        </ProjectContainer>
    );
}

// when screen width < 925px
const ProjectContainer = styled.div`
    margin: auto 0;
    text-align: center;
    height: 100vh;
    padding: 5em 0;
    background: #c0e0fc;

    @media only screen and (max-width: 925px) {
        height: 180vh;
    }
`;

// when screen width < 925px
const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 0.2fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 5em;
    height: 80%;
    margin-bottom: 2em;
    
    @media only screen and (max-width: 925px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
        grid-row-gap: 2em;
        padding: 2em;
    }
`;

const CardTop = styled.div`
    display: flex;
    padding: 1em;
`;

const CardBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 4;
    padding-left: 1em;
    color: grey;
    p {
        position: relative;
        bottom: 2em;
        font-size: 14px;
    }
`;

const CardIcon = styled.img`
    margin: 0 0 0 auto;
    
    border: 1px solid black;
    border-radius: 50%;
    padding: 0.5em;
    background: black;
`;

const CardTitle = styled.h4`
    position: relative;
    top: 1em;
`;

export default Projects;