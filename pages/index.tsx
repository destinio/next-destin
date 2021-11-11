import styled from '@emotion/styled'
import { NextPage } from 'next'
import ReactTooltip from 'react-tooltip'

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
      <p>Software developer, talent manager, and all-around super cool dude!</p>

      <p>
        CSS and <span>TypeScript</span> are my jam. You can find my hacking on{' '}
        <a href="https://codepen.io/destinio" style={{ color: '#FFDD41' }}>
          Codepen
        </a>{' '}
        and{' '}
        <a href="https://github.com/destinio" style={{ color: '#58A6FF' }}>
          GitHub
        </a>
        .
      </p>

      <p>
        I also have opinions on web software development and share them on{' '}
        <a href="https://www.twitch.tv/coderdestin" style={{ color: '#A870FF' }}>
          Twitch
        </a>{' '}
        and{' '}
        <a href="https://twitter.com/coderdestin" style={{ color: '#1DA1F1' }}>
          Twitter
        </a>
        .
      </p>

      <p>
        Those that know me know I love BBQ, and I love sharing the desirable images on{' '}
        <a href="https://www.instagram.com/famleebbqwi/" style={{ color: '#e456a0' }}>
          Instagram
        </a>
        .
      </p>

      <p>
        If you are interested in my work history, you can head over to{' '}
        <a href="https://www.linkedin.com/in/destinlee/" style={{ color: '#4c95de' }}>
          LinkedIn
        </a>
        .
      </p>
      <p style={{ fontSize: '2em' }}>☯︎</p>
    </StyledHome>
  )
}

export default Home
