import React from 'react';
import styled from 'styled-components';

import Card from './common/Card';
import CardSection from './common/CardSection';

// need to import a project card component to hold each project
// this card would include a name, small description, image
// will dispolay in a grid like style
/*
    will need to grab metadata about each project using graphql, implement inside Card component itself.
    then from this Projects component I will add them as props? think about this...

    For now I am setting this up without a StaticQuery component. Just to get some layout down.
*/

const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 3em;
    grid-row-gap: 1em;
    padding: 3em;
    height: 70%;
    bacground: red;
    z-index: 1;
`;

const Projects = () => {
    return(
        <div 
            style={{ 
                margin: 'auto 0', 
                textAlign: 'center',
                background: 'yellow',
                height: '100vh', 
            }}
        >
            <h1>Projects Section</h1>
            <ProjectSection>
                <Card>
                    <CardSection><h3>Project 1</h3></CardSection>
                    <CardSection><p>Project 1 description</p></CardSection>
                </Card>
                <Card>
                    <CardSection><h3>Project 2</h3></CardSection>
                    <CardSection><p>Project 2 description</p></CardSection>
                </Card>
                <Card>
                    <CardSection><h3>Project 3</h3></CardSection>
                    <CardSection><p>Project 3 description</p></CardSection>
                </Card>
                <Card>
                    <CardSection><h3>Project 4</h3></CardSection>
                    <CardSection><p>Project 4 description</p></CardSection>
                </Card>
                <Card>
                    <CardSection><h3>Project 5</h3></CardSection>
                    <CardSection><p>Project 5 description</p></CardSection>
                </Card>
                <Card>
                    <CardSection><h3>Project 6</h3></CardSection>
                    <CardSection><p>Project 6 description</p></CardSection>
                </Card>
            </ProjectSection>
        </div>
    );
};

export default Projects;