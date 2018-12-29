import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


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

// fragment to reduce size of query for project images below
export const fluidImages = graphql`
    fragment fluidImages on File {
        childImageSharp {
            fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
            }
        }
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

const ProjectImg = styled.div`
    border-radius: 0.3em;
    flex: 4;
`;

const ProjectsOld = () => (
    <StaticQuery
        query={graphql`
            query ProjectsQuery {
                projectOne: file(relativePath: { eq: "project-1.png" }) {
                    ...fluidImages
                }
                projectTwo: file(relativePath: { eq: "project-2.png" }) {
                    ...fluidImages
                }
                projectThree: file(relativePath: { eq: "project-3.png" }) {
                    ...fluidImages
                }
                projectFour: file(relativePath: { eq: "project-4.png" }) {
                    ...fluidImages
                }
            }
        `}
        render={data =>
            <div
                style={{
                    margin: 'auto 0',
                    textAlign: 'center',
                    height: '140vh',
                    padding: '5em 0',
                    background: '#8DDBE0',
                }}
            >
                <h2>Previous Projects</h2>
                <ProjectSection>
                    <Card>
                        {/* <ProjectImage imageName="project-1.png" style={{ flex: '4' }} /> */}
                        <Img style={{ borderRadius: '0.3em' }} fluid={data.projectOne.childImageSharp.fluid} />
                        <CardSection>
                            <h4>Informative page on homelessness</h4>
                            <ProjectDescription>HTML/CSS/Javascript - Flex</ProjectDescription>
                        </CardSection>
                    </Card>
                    <Card>
                        <Img
                            style={{
                                borderTopLeftRadius: '0.3em',
                                borderTopRightRadius: '0.3em'
                            }}
                            fluid={data.projectTwo.childImageSharp.fluid} />
                        <CardSection>
                            <h4>Fan page about No Man's Sky</h4>
                            <ProjectDescription>HTML/CSS/Javascript - Flex</ProjectDescription>
                        </CardSection>
                    </Card>
                    <Card>
                        <Img
                            style={{
                                borderTopLeftRadius: '0.3em',
                                borderTopRightRadius: '0.3em'
                            }}
                            fluid={data.projectThree.childImageSharp.fluid} />
                        <CardSection>
                            <h4>Website for Unhoused Humanity</h4>
                            <ProjectDescription>SquareSpace - Developer Mode - HTML5/CSS3/Javascript</ProjectDescription>
                        </CardSection>
                    </Card>
                    <Card>
                        <Img
                            style={{
                                borderRadius: '0.3em',
                                flex: '4'
                            }}
                            fluid={data.projectFour.childImageSharp.fluid} />
                        <CardSection>
                            <h4>React App: Pictures</h4>
                            <ProjectDescription>React - Javascript - Unsplash API</ProjectDescription>
                        </CardSection>
                    </Card>
                    <Card>
                        {/* <FutureProjectImage /> */}
                        <Img
                            style={{
                                borderRadius: '0.3em',
                                flex: '4'
                            }}
                            fluid={data.projectThree.childImageSharp.fluid}
                        />
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
                <ProjectLink destination="https://github.com/Sasheem?tab=repositories">More Projects</ProjectLink>
            </div>
        }
    />
)

export default ProjectsOld;