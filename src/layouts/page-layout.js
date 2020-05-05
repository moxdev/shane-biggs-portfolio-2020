/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import theme from '../theme/theme'
import globalStyles from '../theme/global-styles'

import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.main`
  background-color: ${(props) => props.theme.color.background_content};
  margin: 0;
`

const ContentWrapper = styled.div`
  width: 960px;
  max-width: 90vw;
  margin: 0 auto;
  padding: 2rem 0 4rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <ContentWrapper>{children}</ContentWrapper>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
