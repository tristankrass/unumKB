import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";


const Faq = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulFaq(sort: {fields:[updatedAt], order:DESC}) {
      nodes {
        question
        answer {
          json
        }
        updatedAt(formatString: "MMMM Do, YYYY")
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title="FAQ" />
      <h1>FAQ</h1>
      <section>
        {data.allContentfulFaq.nodes.map((qa, id) => {
          return (
            <div key={id}>
              <h1>
                {qa.question}
              </h1>
              <p>
                {json.content[0].content[0].value}
              </p>
              <p>
                {qa.updatedAt}
              </p>
            </div>
          )
        })}
      </section>
    </Layout>
  )

}



export default Faq
