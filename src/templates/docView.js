import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const DocView = () => {
    console.log(
        props
    )
    return (
        <Layout>
            <SEO title="FAQ" />
            <div>
                <h1>
                    {props}
                </h1>
                <p>
                    dangerouslySetInnerHTML={{
                        __html: post.html
                    }}
                </p>
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
