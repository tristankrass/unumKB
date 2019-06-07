import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        landingImage: file(relativePath: { eq:
          "data_landing.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    `}
    render={data => <Img fluid={data.landingImage.childImageSharp.fluid} />}
  />
)
export default Image
