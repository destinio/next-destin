import { css } from '@emotion/react'

const RATIO = 1.3

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

  :root {
    font-size: calc(${RATIO}rem + 0.5vw);
    --blue: #00a7ff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
  }

  body {
    font-family: Helvetica, sans-serif;
    background-color: #1c1d21ff;
    color: #cbcdd2ff;
    min-height: 60vh;
  }

  a {
    all: unset;

    &:visited {
      all: unset;
    }
  }

  @media screen and (min-width: 40rem) {
    :root {
      font-size: calc(1.5rem + 0.5vw);
    }
  }
  @media screen and (min-width: 90rem) {
    :root {
      font-size: calc(1.75rem + 0.5vw);
    }
  }
  @media screen and (min-width: 140rem) {
    :root {
      font-size: calc(2.25rem + 0.5vw);
    }
  }
  @media screen and (min-width: 220rem) {
    :root {
      font-size: calc(2.5rem + 0.5vw);
    }
  }
  @media screen and (min-width: 320rem) {
    :root {
      font-size: calc(3rem + 0.5vw);
    }
  }
`

export { GlobalStyles }
