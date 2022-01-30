import Head from 'next/head'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" viewport-fit="cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Software Developer working at Widen" />
        <meta name="title" content="Destin Lee - Software Developer" />
        <meta
          name="description"
          content="Experienced web developer with a passion for accessibility and dynamic design. Find me on Github, Twitter, and Instagram"
        />
        <meta
          name="keywords"
          content="software developer, software engineer, widen, madison wi, madison, react, css, typescript, javascript, github, destin, lee, destin lee"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@coderdestin" />
        <meta name="twitter:title" content="Destin Lee - Software Developer" />
        <meta
          name="twitter:description"
          content="Experienced web developer with a passion for accessibility and dynamic design. Find me on Github, Twitter, and Instagram"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Destin Lee" />

        {/* <link rel="canonical" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="canonical" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" rel="manifest" href="/site.webmanifest" /> */}
        <script async src="https://static.getclicky.com/101326279.js" defer></script>

        <title>Destin Lee - Software Developer</title>
      </Head>
      <div id="main_layout">{children}</div>
    </>
  )
}

export { Layout }
