import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Header"

const HomePage = ({
  data: {
    homePageQuery: {
      frontmatter: { header },
    },
  },
}) => (
  <Layout>
    <Header header={header} />
  </Layout>
)

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        header {
          heroImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          heading1
          heading2
        }
      }
    }
  }
`
