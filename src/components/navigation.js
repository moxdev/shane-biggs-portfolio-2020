import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
  display: flex;
  margin-top: 0;
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;

  &:hover {
    color: black;
  }

  &.current-page {
    border-bottom: 2px solid ${(props) => props.theme.color.background_body};
    color: ${(props) => props.theme.color.background_body};
  }

  &:last-of-type {
    margin-right: 0;
  }
`
const Navigation = () => (
  <Nav aria-label="main navigation">
    <NavLink to="/" activeClassName="current-page">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="current-page">
      About
    </NavLink>
    <NavLink to="/portfolio" activeClassName="current-page">
      Portfolio
    </NavLink>
    <NavLink to="/blog" activeClassName="current-page">
      Blog
    </NavLink>
    <NavLink to="/contact" activeClassName="current-page">
      Contact
    </NavLink>
    <NavLink to="/uses" activeClassName="current-page">
      /Uses
    </NavLink>
  </Nav>
)

export default Navigation
