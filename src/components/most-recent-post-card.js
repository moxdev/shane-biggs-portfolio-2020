import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import ReadLink from '../components/read-link'

const Article = styled.article`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-top: 0.75rem;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`

const MostRecentPostCard = ({ post }) => (
  <Article>
    {post.featuredImage && (
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 300px;
        `}
      >
        <Img
          fluid={post.featuredImage.childImageSharp.fluid}
          alt={post.featuredImageAlt}
        />
      </Link>
    )}
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
        <p>{post.excerpt}</p>
      </h3>
      <ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
    </div>
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
