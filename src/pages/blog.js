import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useAllPosts from '../hooks/use-all-posts'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'
import ReadLink from '../components/read-link'

const BlogList = styled.ul`
  list-style-type: none;
  margin: 1.5rem 0;
  padding: 0;
`

const BlogIndex = () => {
  const allPosts = useAllPosts()

  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <h1>All Blog Posts</h1>

      <BlogList>
        {allPosts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogIndex
