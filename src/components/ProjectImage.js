import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

const ProjectImage = (props) => (
    <StaticQuery 
        query={graphql`
            query ProjectQuery {
                projectOne: file(relativePath: { eq: "project-1.png" }) {
                    ...fluidImage
                }
                projectTwo: file(relativePath: { eq: "project-2.png" }) {
                    ...fluidImage
                }
            }
        `}
        render={data => 
            <Img style={{ borderRadius: '0.3em' }} fluid={data.projectTwo.childImageSharp.fluid} />
        }
    />
)

export default ProjectImage;