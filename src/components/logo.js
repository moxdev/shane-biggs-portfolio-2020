import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import Img from 'gatsby-image'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "memoji.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      css={css`
        width: 75px;
        height: 75px;

        * {
          margin-top: 0;
        }
      `}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Logo
