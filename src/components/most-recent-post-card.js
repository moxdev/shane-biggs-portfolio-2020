import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import PropTypes from 'prop-types'

// import ReadLink from '../components/read-link';

const Article = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 0.75rem;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`

const MostRecentPostCard = ({ post }) => (
  <Article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    {post.featuredImage && (
      <Img
        fluid={post.featuredImage.childImageSharp.fluid}
        alt={post.featuredImageAlt}
      />
    )}
    <p>{post.excerpt}</p>
    <Link to={post.slug}>read this post &rarr;</Link>
  </Article>
)

export default MostRecentPostCard

MostRecentPostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    featuredImageAlt: PropTypes.string,
    slug: PropTypes.string,
    excerpt: PropTypes.string,
  }),
}
