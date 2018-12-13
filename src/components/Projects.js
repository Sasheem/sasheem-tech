import React from 'react';
import styled from 'styled-components';

import Card from './common/Card';
import CardSection from './common/CardSection';
import ProjectLink from './ProjectLink';
import ProjectImage from './ProjectImage';

// need to import a project card component to hold each project
// this card would include a name, small description, image
// will dispolay in a grid like style
/*
    will need to grab metadata about each project using graphql, implement inside Card component itself.
    then from this Projects component I will add them as props? think about this...

    For now I am setting this up without a StaticQuery component. Just to get some layout down.

    ------------------------

    So I am moving the logic out of ProjectImage to here for now b/c I think I need Apollo to pass in a prop
    to my ProjectImage component w/ the appropriate file name for it to return the corresponding image.
    I will just query all my images now and display them by referencing the respective alias I create in
    the query method for my <StaticQuery />
*/

const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 3em;
    height: 80%;
`;

const ProjectDescription = styled.p`
    position: relative;
    bottom: 1em;
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.4);
`;

const FutureProjectImage = styled.div`
    background: rgba(0, 0, 0, 0.4);
    flex: 4;
`;


const Projects = () => {
    return(
        <div 
            style={{ 
                margin: 'auto 0', 
                textAlign: 'center',
                height: '100vh', 
                paddingTop: '1em',
            }}
        >
            <h2>Previous Projects</h2>
            <ProjectSection>
                <Card>
                    <ProjectImage imageName="project-1.png" style={{ flex: '4' }}/>
                    <CardSection>
                        <h4>Project 1</h4>
                        <ProjectDescription>Project 1 Description</ProjectDescription>
                        {/* <p style={{ position: 'relative', bottom: '1em' }}>Project 1 Description</p> */}
                    </CardSection>
                </Card>
                <Card>
                    <ProjectImage style={{ flex: '4' }} />
                    <CardSection>
                        <h4>Project 2</h4>
                        <ProjectDescription>Project 2 description</ProjectDescription>
                    </CardSection>
                </Card>
                <Card>
                    <FutureProjectImage />
                    <CardSection>
                        <h4>Project 3</h4>
                        <ProjectDescription>Project 3 description</ProjectDescription>
                    </CardSection>
                </Card>
                <Card>
                    <FutureProjectImage />
                    <CardSection>
                        <h4>Project 4</h4>
                        <ProjectDescription>Project 4 description</ProjectDescription>
                    </CardSection>
                </Card>
                <Card>
                    <FutureProjectImage />
                    <CardSection>
                        <h4>Project 5</h4>
                        <ProjectDescription>Project 5 description</ProjectDescription>
                    </CardSection>
                </Card>
                <Card>
                    <FutureProjectImage />
                    <CardSection>
                        <h4>Project 6</h4>
                        <ProjectDescription>Project 6 description</ProjectDescription>
                    </CardSection>
                </Card>
            </ProjectSection>
            <ProjectLink href="/">More Projects</ProjectLink>
        </div>
    );
};

export default Projects;