import React, { Fragment } from 'react'
import Head from 'next/head'
import Appbar from './Appbar'
import Footer from './Footer'

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>Fronius PV Lifetime Cost Calculator</title>
    </Head>

    <Appbar />

    <main>{children}</main>

    <Footer />

    <style jsx global>{`
      :root {
        --accent-color: #e2001a;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      ::selection {
        color: #fff;
        background: #7b7c7e;
      }

      html {
        margin: 0;
        padding: 0;
        height: 100vh;
      }

      body {
        color: #4b4b4d;
        background: #eceded;
        margin: 0;
        line-height: 1.2;
        font-size: 13px;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      main {
        margin: 0 auto;
        padding: 2rem 4rem;
        min-height: calc(100vh - 148px);
      }

      main section {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
      }

      main section.full-width {
        margin: 0 -4rem;
        width: calc(100% + 8rem);
        max-width: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      p {
        margin-bottom: 1rem;
      }

      p:last-child {
        margin-bottom: 0;
      }

      img {
        width: 100%;
        max-width: 100%;
      }

      a {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
      }

      a.link {
        border-bottom: 1px dotted #b2b2b3;
      }

      a.link:hover {
        border-bottom: 1px dotted #4c4c4d;
      }

      @media (max-width: 767px) {
        main {
          padding: 1rem;
        }
      }
    `}</style>
  </Fragment>
)
