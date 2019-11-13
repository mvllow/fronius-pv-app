import React from 'react'

export default () => (
  <header className="header">
    <section>
      <a href="#!">
        <img
          src="https://www.fronius.com/~/protected-media/images/fronius-logo.png"
          alt="Fronius Logo"
        />
      </a>

      <h1>PV System Lifetime Cost Calculator</h1>

      <div style={{ flex: 1 }} />

      <nav>
        <a href="#!">Our Products</a>
        <a href="#!">Technical Information</a>
        <a href="#!">More Information</a>
      </nav>
    </section>

    <style jsx>{`
      header {
        padding: 0 15px;
        height: 100px;
        background: #fff;
        border-top: 2px solid var(--accent-color);
        display: flex;
        align-items: center;
      }

      header section {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
      }

      img {
        margin-right: 45px;
        width: 140px;
        min-width: 140px;
        height: 55px;
        display: flex;
        align-items: center;
      }

      h1 {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
      }

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      nav a {
        font-weight: 700;
        text-transform: uppercase;
      }

      nav a:not(:last-child) {
        margin-right: 30px;
      }

      nav a:hover {
        color: #8797b4;
      }
    `}</style>
  </header>
)
