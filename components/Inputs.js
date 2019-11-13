import React from 'react'

export default ({ values, handleOnChange }) => (
  <aside>
    <label htmlFor="system-size">
      System Size <span>Watts</span>
      <div>
        <input
          name="system-size"
          defaultValue={values.systemSizeInWatts}
          onChange={handleOnChange}
        />
      </div>
    </label>

    <label htmlFor="installed-cost">
      Installed Cost <span>per Watt</span>
      <div className="currency">
        <input
          name="installed-cost"
          defaultValue={values.installedCostPerWatt}
          onChange={handleOnChange}
        />
      </div>
    </label>

    <label htmlFor="labour">
      Labour <span>per hour</span>
      <div className="currency">
        <input
          name="labour"
          defaultValue={values.labourPerHour}
          onChange={handleOnChange}
        />
      </div>
    </label>

    <label htmlFor="engineer">
      Engineer <span>per Hour</span>
      <div className="currency">
        <input
          name="engineer"
          defaultValue={values.engineerPerHour}
          onChange={handleOnChange}
        />
      </div>
    </label>

    <label htmlFor="service-trips">
      Service Trips <span>total Cost</span>
      <div className="currency">
        <input
          name="service-trips"
          defaultValue={values.serviceTrips}
          onChange={handleOnChange}
        />
      </div>
    </label>

    <style jsx>{`
      aside {
        margin: 0 -0.5rem;
        width: calc(100% + 1rem);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      label {
        margin: 0 0.5rem 1rem 0.5rem;
        padding: 1rem;
        background: white;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.2rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        order: 1;
      }

      label .currency {
        display: flex;
        align-items: center;
      }

      label .currency:before {
        content: '$';
        color: #7b7c7e;
        font-size: 18px;
        font-weight: 600;
        display: inline-flex;
      }

      label > span {
        color: #7b7c7e;
        display: flex;
        order: 3;
      }

      label input {
        margin-bottom: 8px;
        width: 5ch;
        font-size: 28px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #7b7c7e;
        outline: none;
        display: flex;
        order: 2;
      }
    `}</style>
  </aside>
)
