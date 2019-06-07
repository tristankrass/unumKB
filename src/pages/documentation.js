import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBox from "../components/searchBox"
import Article from "../components/article"


const Documentation = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulSpecificDocumentation {
            totalCount
            nodes {
                title
                tags
                publishDate
                description {
                    description
                }
                author {
                    name
                    title
                }
            }
        }
    }
`)

    return (
        <Layout>
            <SEO title="Documentation" />
            <h1>Documentation</h1>
            <h5>Total posts: {data.allContentfulSpecificDocumentation.totalCount}</h5>
            <SearchBox />
            {data.allContentfulSpecificDocumentation.nodes.map(node => {
                return (
                    <Article
                        title={node.title}
                        desc={node.description.description}
                        publishDate={node.publishDate}
                        tags={node.tags}
                        author={node.author.name} />
                )
            })}
        </Layout>
    )
}


export default Documentation
