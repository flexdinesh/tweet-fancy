import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tweet Fancy in bold, italics and strikethough text"
      keywords={[
        `tweet`,
        `markdown`,
        `format`,
        `bold`,
        `italics`,
        `strikethrough`,
      ]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
