import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";


const Faq = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }

`)
  return (
    <Layout>
      <SEO title="FAQ" />
      <h1>FAQ</h1>
      <h4>
        {data.site.siteMetadata.title}
      </h4>
      <p>
        {data.site.siteMetadata.description}
      </p>
    </Layout>
  )

}



export default Faq
