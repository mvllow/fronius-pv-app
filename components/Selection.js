import React from 'react'

export default () => (
  <aside>
    <button className="active">
      Snap
      <b>IN</b>
      verter
    </button>
    <button>Micro&ndash;Inverter</button>
    <button>Typical String Inverter</button>

    <style jsx>{`
      aside {
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
      }

      button {
        color: var(--accent-color);
        margin: 1rem 1rem 1rem 0;
        padding: 0 1rem;
        height: 24px;
        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;
        background: transparent;
        border: 2px solid var(--accent-color);
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      button:hover {
        background: hsl(353, 100%, 94%);
      }

      button.active {
        color: white;
        background: var(--accent-color);
      }

      button b {
        font-weight: 900;
      }
    `}</style>
  </aside>
)
