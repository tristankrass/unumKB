import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";
import FaqCard from "../components/faqCard";


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
      <h1>Frequently Asked Questions</h1>
      <hr />
      <section>
        {data.allContentfulFaq.nodes.map((qa, id) => {
          return (
            <FaqCard
              key={id}
              question={qa.question}
              answer={qa.answer.json.content[0].content[0].value}
              id={id}
              time={qa.updatedAt}
            />
          )
        })}
      </section>
    </Layout>
  )

}



export default Faq
