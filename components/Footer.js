import React from 'react'

export default () => (
  <footer>
    <section>
      <span>&copy; 2017 - 2018 Fronius International GmbH</span>

      <div style={{ flex: 1 }} />

      <div className="madeby">
        design by&nbsp;
        <a href="http://mellow.sh">
          mell
          <span />
          w.
        </a>
      </div>
    </section>

    <style jsx>{`
      footer {
        color: white;
        padding: 0 15px;
        height: 48px;
        background: #4b4b4d;
        display: flex;
        align-items: center;
      }

      footer section {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
      }

      footer section > span {
        font-size: 12px;
        display: flex;
        align-items: center;
      }

      footer .madeby {
        color: #ddd;
      }

      footer .madeby a {
        font-weight: 600;
      }

      footer .madeby a span {
        margin: 0 1px;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
        border-top-left-radius: 0;
        display: inline-block;
      }
    `}</style>
  </footer>
)
