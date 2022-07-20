import styled from '@emotion/styled'
import { NextPage } from 'next'
import { CgYinyang } from 'react-icons/cg'

const StyledHome = styled.main`
  max-width: 900px;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
    display: inline-block;
    transition: transform 200ms ease;
    font-weight: bold;

    &:nth-of-type(odd):hover,
    &:nth-of-type(odd):focus {
      transform: rotate(-8deg);
    }

    &:nth-of-type(even):hover,
    &:nth-of-type(even):focus {
      transform: rotate(-8deg);
    }
  }
`

const StyledLinks = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0.5em;
  margin: 0 0 var(--step-2);
`

const StyledText = styled.a`
  color: ${({ color }) => (color ? color : 'blue')};
`

const StyledGradText = styled(StyledText)`
  background-image: linear-gradient(90deg, #fb8817, #ff4b01, #c12127, #e02aff);
  background-clip: text;
  color: rgba(0, 0, 0, 0);
`

const StyledYinAndYang = styled(CgYinyang)`
  animation: spin 10s linear infinite;
  font-size: var(--step-1);
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Home: NextPage = () => {
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

export default Home
