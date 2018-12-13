import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectImage = () => (
    <StaticQuery 
        query={graphql`
            query ProjectQuery {
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
                    borderTopLeftRadius: '0.3em',
                    borderTopRightRadius: '0.3em' 
                }} 
                fluid={data.projectImage.childImageSharp.fluid} 
            />
        }
    />
)

export default ProjectImage;