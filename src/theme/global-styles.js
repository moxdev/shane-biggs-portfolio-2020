import { css } from '@emotion/core'
import theme from '../theme/theme'
import normalize from 'normalize.css'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap');

  ${normalize}

  * {
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    background-color: ${theme.color.background_body};
    color: ${theme.color.text_main};
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    margin: 0;
  }

  /* remove margin for Gatsby mount div */
  > div {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.color.text_main};
    line-height: 1.1;

    + * {
      margin-top: 0.5rem;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
    color: ${theme.color.h1};
  }
`
export default globalStyles
