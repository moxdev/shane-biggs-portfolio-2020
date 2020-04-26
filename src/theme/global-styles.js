import { css } from '@emotion/core'
import theme from '../theme/theme'
import normalize from 'normalize.css'

const globalStyles = css`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap');

  body {
    background-color: ${theme.colors.background_color_body};
    color: #cee2e7;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-weight: 500;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 1.5rem;
  }
`
export default globalStyles
