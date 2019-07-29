import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query ProfileQuery {
        profileImage: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ borderRadius: "25%" }}
        fixed={data.profileImage.childImageSharp.fixed}
      />
    )}
  />
)

export default Image
