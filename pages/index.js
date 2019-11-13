import React, { Component } from 'react'
import getConfig from '../config.json'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Selection from '../components/Selection'
import Inputs from '../components/Inputs'
import Graph from '../components/Graph'
import Breakdown from '../components/Breakdown'

export default class Index extends Component {
  constructor() {
    super()

    this.state = { config: getConfig, inputs: {}, labels: {} }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    console.log(e)
    this.setState({ inputs: { [e.target.name]: e.target.value } })
  }

  render() {
    const { config } = this.state

    return (
      <Layout>
        <section>
          <Intro />
        </section>

        <section>
          <Selection />
        </section>

        <section>
          <Inputs values={config} handleOnChange={this.onChange} />
        </section>

        <section style={{ marginTop: '1rem' }}>
          <Graph />
          <Breakdown />
        </section>
      </Layout>
    )
  }
}
