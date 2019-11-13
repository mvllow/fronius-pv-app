import React from 'react'

export default () => (
  <aside>
    <h1>
      Cost Breakdown
      <div style={{ flex: 1 }} />
      <b>$23,000</b>
    </h1>

    <ul>
      <li>
        Initial System
        <div style={{ flex: 1 }} />
        $16,000
      </li>
      <li>
        Inverter Service Fees
        <div style={{ flex: 1 }} />
        $866
      </li>
      <li>
        Inverter Replacement <div style={{ flex: 1 }} />
        $628
      </li>
      <li>
        Interconnection Upgrade <div style={{ flex: 1 }} />
        $0
      </li>
      <li>
        System Engineering <div style={{ flex: 1 }} />
        $0
      </li>
      <li>
        Additional BOS <div style={{ flex: 1 }} />
        $0
      </li>
      <li>
        Re&ndash;inspection <div style={{ flex: 1 }} />
        $0
      </li>
      <li>
        Conduit <div style={{ flex: 1 }} />
        $0
      </li>
    </ul>

    <style jsx>{`
      aside {
        padding: 1rem;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 0.2rem;
      }

      h1 {
        margin-bottom: 1rem;
        font-size: 13px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        margin: 0 -1rem;
        padding: 0 1rem;
        height: 28px;
        display: flex;
        align-items: center;
      }

      li:nth-child(odd) {
        background: hsl(0, 0%, 98%);
      }
    `}</style>
  </aside>
)
