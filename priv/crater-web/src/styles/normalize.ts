// tslint:disable:no-unused-expression

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { fonts, pxSizes } from 'styles/variables'
import { colors } from 'styles/variables'

injectGlobal`
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
    font-family: ${fonts.monospace};
    font-size: ${pxSizes.fontSize.regular}px;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.grey};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.white};
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }
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

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.white};
    text-rendering: optimizeLegibility;
  }

  .lead {
    font-size: 1.25rem;
  }
`
