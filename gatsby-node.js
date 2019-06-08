require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(
        `
      {
        allContentfulSpecificDocumentation {
          edges {
            node {
              id
              slug
            }
            next {
                slug
            }
            previous {
                slug
            }
          }
        }
      }
    `
    ).then(result => {
        if (result.errors) {
            console.log("Error retrieving contentful data", result.errors);
        }

        const docViewTemplate = path.resolve("./src/templates/docView.js");
        // Then for each result we create a page.
        result.data.allContentfulSpecificDocumentation.edges.map(edge => {
            createPage({
                path: `/documentation/${edge.node.slug}/`,
                component: slash(docViewTemplate),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id
                }
            });
        });
    })
        .catch(error => {
            console.log("Error retrieving contentful data", error);
        });
};


// * See: https://www.gatsbyjs.org/docs/node-apis/