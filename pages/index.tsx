import styled from '@emotion/styled'
import { NextPage } from 'next'
import { CgYinyang } from 'react-icons/cg'

const StyledHome = styled.main`
  max-width: 60rem;
  width: 100%;
  padding: 1rem 1rem 0;
  margin: 0 auto;

  h1 {
    margin: 0 0 0.5em;
    line-height: 1.4;

    > div {
      display: inline-block;
      font-weight: bold;
    }
  }

  h2 {
    font-size: 0.7rem;
    font-style: italic;
    margin: 0 0 2em 0.5em;
  }

  p {
    margin: 0 0 1em;
    line-height: 1.4;

    @media screen and (min-width: 60rem) {
      margin-bottom: 0.5em;
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

  span[data-for='ts-tip'] {
    text-decoration: underline dotted;
    cursor: help;
  }

  .ts-tip {
    width: 10rem;
    font-size: 0.7rem;
    padding: 0.7rem;
  }

  @media screen and (min-width: 60rem) {
    padding: 2rem;
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
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Home: NextPage = () => {
  return (
    <StyledHome>
      <h1>
        <div>Welcome,</div> <div>I'm Destin.</div>
      </h1>
      <h2>
        <div>Strive not to be a success, but rather to be of value. </div>
        <div>-- Albert Einstein</div>
      </h2>
      <p>Software developer and talent manager.</p>
      <p>
        You can find my hacking on{' '}
        <StyledText href="https://codepen.io/destinio" color="#FFDD41">
          Codepen
        </StyledText>
        ,{' '}
        <StyledText href="https://github.com/destinio" color="#58A6FF">
          GitHub
        </StyledText>
        , and{' '}
        <StyledGradText color="red" href="https://www.npmjs.com/~destinio">
          NPM
        </StyledGradText>
        .
      </p>

      <p>
        I also have opinions on web software development and share them on{' '}
        {/* <StyledText href="https://www.twitch.tv/coderdestin" color="#A870FF">
          Twitch
        </StyledText>{' '} */}
        <StyledText href="https://twitter.com/coderdestin" color="#1DA1F1">
          Twitter
        </StyledText>
        .
      </p>

      <p>
        Those that know me know I love BBQ, and I love sharing the desirable images on{' '}
        <StyledText href="https://www.instagram.com/famleebbqwi/" color="#e456a0">
          Instagram
        </StyledText>
        .
      </p>

      <p>
        If you are interested in my work history, you can head over to{' '}
        <StyledText href="https://www.linkedin.com/in/destinlee/" color="#4c95de">
          LinkedIn
        </StyledText>
        .
      </p>
      <p style={{ fontSize: '2em' }}>
        <StyledYinAndYang />
      </p>
    </StyledHome>
  )
}

export default Home
