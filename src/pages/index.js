import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Helmet title="Home | Title" />
    <h1>Iron Maiden</h1>
    <p>40 years of metal!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/404/">This is a page link</Link>
  </Layout>
)

export default IndexPage
