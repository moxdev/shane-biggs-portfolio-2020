/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

import theme from '../theme/theme'
// Adding global CSS
import { Global, css } from '@emotion/core'
import globalStyles from '../theme/global-styles'

import Header from '../components/header'
import Footer from '../components/footer'

const Content = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
  background-color: #fff;
`

const Layout = ({ children }) => {
  // make this into a Hook?
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <ThemeProvider theme={theme}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
