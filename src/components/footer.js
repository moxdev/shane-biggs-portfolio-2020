import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  background: #333;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background_color_body};

  a {
    color: ${(props) => props.theme.colors.color_text_main};
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
