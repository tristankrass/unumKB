import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DocView = ({ data }) => {
    const { title, body, tags, author } = data.contentfulSpecificDocumentation;
    return (
        <Layout>
            <SEO title={title} />
            <div>
                <p dangerouslySetInnerHTML={{ __html: body.body }
                }
                />
            </div>
        </Layout>
    )
}
export default DocView

export const query = graphql`
    query($slug:String!){
                contentfulSpecificDocumentation(slug: {eq: $slug}) {
                title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            body {
                body
            }
            author{
                name
            }
            }
        }
        `
