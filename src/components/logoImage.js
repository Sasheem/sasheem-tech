import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        logoImage: file(relativePath: { eq: "logo1.png" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logoImage.childImageSharp.fixed} />}
  />
)

export default Image
