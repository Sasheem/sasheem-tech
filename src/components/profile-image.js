import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProfileImage = () => {
    <StaticQuery 
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "profile-pic.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
        
    />
}

export default ProfileImage;