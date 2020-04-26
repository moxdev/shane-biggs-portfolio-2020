import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1.5rem;
    text-transform: uppercase;

    &:hover {
      color: black;
    }
  }
`

const Navigation = () => (
  <Nav aria-label="main navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Nav>
)

export default Navigation
