import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'

const shortcodes = { Link } // Provide common components here

export default function BlogPostSinglePageTemplate({ data: { mdx } }) {
  const { title, date, featuredImage, featuredImageAlt } = mdx.frontmatter
  const { timeToRead, body } = mdx

  return (
    <Layout>
      <SEO pageTitle={title} />
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{`Time to read: ${timeToRead} min`}</p>
        {featuredImage && (
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={featuredImageAlt}
          />
        )}

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImageAlt
      }
      timeToRead
    }
  }
`
