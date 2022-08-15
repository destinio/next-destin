import { css } from '@emotion/react'

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

  :root {
    --step--4: clamp(0.72rem, 0.56rem + 0.83vw, 1.02rem);
    --step--3: clamp(0.87rem, 0.64rem + 1.14vw, 1.28rem);
    --step--2: clamp(1.04rem, 0.73rem + 1.54vw, 1.6rem);
    --step--1: clamp(1.25rem, 0.84rem + 2.07vw, 2rem);
    --step-0: clamp(1.5rem, 0.95rem + 2.76vw, 2.5rem);
    --step-1: clamp(1.8rem, 1.07rem + 3.66vw, 3.13rem);
    --step-2: clamp(2.16rem, 1.2rem + 4.82vw, 3.91rem);
    --step-3: clamp(2.59rem, 1.33rem + 6.32vw, 4.88rem);
    --step-4: clamp(3.11rem, 1.46rem + 8.26vw, 6.1rem);
    --step-5: clamp(3.73rem, 1.58rem + 10.75vw, 7.63rem);
    --blue: #00a7ff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.2;
  }

  body {
    font-family: Helvetica, sans-serif;
    font-size: var(--step-0);
    background-color: hsl(0, 0%, 12%);
    color: #fffafa;
    height: 100vh;
  }

  #__next,
  #main_layout {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: unset;
  }

  h1 {
    font-size: var(--step-5);
    font-weight: 700;
    /* margin: 0 0 var(--step-0); */
  }
  h2 {
    font-size: var(--step-1);
    margin: 0 0 var(--step-1);
  }
  h3 {
    font-size: var(--step-3);
  }
  h4 {
    font-size: var(--step-2);
  }
  h5 {
    font-size: var(--step-1);
  }
  h6 {
    font-size: var(--step-0);
  }

  p {
    margin: 0 0 var(--step--2);
  }

  blockquote {
    font-weight: 200;
    font-size: var(--step--2);
    margin: 0 0 var(--step-1);
  }
`

export { GlobalStyles }
