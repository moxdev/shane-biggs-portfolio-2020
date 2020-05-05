import React from 'react'
import { css } from '@emotion/core'

import Logo from './logo'
import Navigation from './navigation'

const Header = () => (
  <header
    css={css`
      background: #374949;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem calc((100vw - 960px - 0.5rem) / 2);
    `}
  >
    <Logo />
    <Navigation />
  </header>
)

export default Header
