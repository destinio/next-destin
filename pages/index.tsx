import styled from '@emotion/styled'
import { NextPage } from 'next'
import { CgYinyang } from 'react-icons/cg'

const StyledHome = styled.main`
  max-width: 1080px;
  width: 100%;
  height: 80%;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const StyledText = styled.a`
  color: ${({ color }) => (color ? color : 'blue')};
  margin: 0 var(--step-0) 0 0;
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
      <p>
        <StyledText href="https://github.com/destinio" color="#58A6FF">
          GitHub
        </StyledText>
        <StyledText href="https://codepen.io/destinio" color="#FFDD41">
          Codepen
        </StyledText>
        <StyledGradText color="red" href="https://www.npmjs.com/~destinio">
          NPM
        </StyledGradText>
        <StyledText href="https://www.linkedin.com/in/destinlee/" color="#4c95de">
          LinkedIn
        </StyledText>
      </p>
      <blockquote>
        <span>Strive not to be a success, but rather to be of value.</span>
        <span>-- Albert Einstein</span>
      </blockquote>
      <StyledYinAndYang />
    </StyledHome>
  )
}

export default Home
