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

  @media screen and (max-width: 500px) {
    gap: 0;
    flex-direction: column;
  }
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
