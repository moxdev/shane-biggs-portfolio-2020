import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <div>
        <h1>Awesome MDX Blog</h1>

        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
