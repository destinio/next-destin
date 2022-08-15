import styled from '@emotion/styled'
import { NextPage } from 'next'
import { CgYinyang } from 'react-icons/cg'

const StyledHome = styled.main`
  height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('/main-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: #333;
    opacity: 0.4;
  }

  h1 {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
    z-index: 3;
  }

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    padding: 3em 0 0;
  }

  span {
    display: block;
    line-height: 1.4;

    &:nth-of-type(2) {
      font-style: italic;
      font-size: var(--step--3);
    }
  }

  a {
    cursor: pointer;
    transition: transform 150ms ease;
    font-weight: bold;
    font-size: 0.75em;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`

const StyledLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin: 0 0 var(--step-2);
  z-index: 3;

  @media screen and (max-width: 500px) {
    gap: 0;
    flex-direction: column;
  }
`

const StyledText = styled.a`
  color: ${({ color }) => (color ? color : 'blue')};
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`

const StyledGradText = styled(StyledText)`
  /* background-image: linear-gradient(90deg, #fb8817, #ff4b01, #c12127, #e02aff);
  background-clip: text; */
  color: #ff4b01;
`

const StyledYinAndYang = styled(CgYinyang)`
  animation: spin 10s linear infinite;
  font-size: var(--step-1);
  z-index: 3;
  position: relative;

  &::after {
    content: '';
    background-color: #111;
    position: absolute;
    height: 100%;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const HomeBeta: NextPage = () => {
  return (
    <StyledHome>
      <h1>Destin Lee.</h1>
      <StyledLinks>
        <StyledText href="https://github.com/destinio" color="#58A6FF">
          GitHub
        </StyledText>
        <StyledText
          href="https://codepen.io/destinio/pens/public"
          color="#FFDD41"
        >
          Codepen
        </StyledText>
        <StyledGradText color="red" href="https://www.npmjs.com/~destinio">
          NPM
        </StyledGradText>
        <StyledText
          href="https://www.linkedin.com/in/destinlee/"
          color="#4c95de"
        >
          LinkedIn
        </StyledText>
      </StyledLinks>
      <StyledYinAndYang />
    </StyledHome>
  )
}

export default HomeBeta
