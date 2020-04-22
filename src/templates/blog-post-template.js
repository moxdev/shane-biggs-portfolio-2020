import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/page-layout'

const shortcodes = { Link } // Provide common components here

export default function BlogPostSinglePageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Helmet title="Home | Title" />
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <p>{mdx.frontmatter.date}</p>
        <p>Time to read: {mdx.timeToRead} minutes</p>
        {mdx.frontmatter.featuredImage && (
          <Img
            fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
            alt={mdx.frontmatter.featuredImageAlt}
          />
        )}

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
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
