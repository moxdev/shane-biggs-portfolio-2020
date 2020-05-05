import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'

function SEO({ pageTitle, metaDescription, meta, lang }) {
  const { title, description, author } = useSiteMetadata()

  const metaDesc = metaDescription || description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDesc,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDesc,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  metaDescription: ``,
  lang: `en`,
}

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

export default SEO
