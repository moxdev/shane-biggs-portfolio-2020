import React from 'react'
import styled from '@emotion/styled'
import Navigation from './navigation'

const HeaderWrapper = styled.header`
  background: #333;
  padding: 1rem;
`

const Header = () => (
  <HeaderWrapper>
    <Navigation />
  </HeaderWrapper>
)

export default Header
