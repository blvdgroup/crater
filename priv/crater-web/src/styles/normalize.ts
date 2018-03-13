import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default () => injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html {
    font-family: monospace, monospace;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 0 1rem;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }
`
