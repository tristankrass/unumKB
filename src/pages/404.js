import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <StaticQuery
      query={graphql`
      query {
        NotFoundImage: file(relativePath:
          { eq: "not_found.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    `}
      render={data => <Img fluid={data.NotFoundImage.childImageSharp.fluid} />}
    />
    <Link to="/">Go back to homepage</Link>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
