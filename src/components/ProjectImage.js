import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectImage = (props) => (
    <StaticQuery 
        query={graphql`
            query ProjectQuery($imageName: String) {
                projectImage: file(relativePath: { eq: "project-1.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img 
                style={{ 
                    borderRadius: '0.3em'
                }} 
                fluid={data.projectImage.childImageSharp.fluid} 
            />
        }
    />
)

export default ProjectImage;