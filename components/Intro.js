import React from 'react'

export default () => (
  <aside>
    <h1>Welcome to the PV System Lifetime Cost Calculator</h1>

    <p>
      This tool will help you calculate the Total Ownership Cost of your PV
      system and the Lifecycle Costs over the next 25 years. The inverter plays
      the most significant role in the sustainability of the overall system,
      optimum power yield and maximum return on investment.
    </p>

    <p>
      Below, please select the type of inverter your system currently has or
      will have to begin the <b>Total Ownership Cost</b> calculation.
    </p>

    <style jsx>{`
      aside {
        padding: 1rem;
        width: 100%;
        background: white;
        border-radius: 0.2rem;
      }

      aside h1 {
        margin-bottom: 1rem;
        font-size: 13px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      }

      aside p {
        line-height: 1.5;
        font-size: 12px;
      }
    `}</style>
  </aside>
)
