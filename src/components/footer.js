import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.background_body};

  a {
    color: ${(props) => props.theme.color.text_alt};
  }
`

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterWrapper>
)

export default Footer
