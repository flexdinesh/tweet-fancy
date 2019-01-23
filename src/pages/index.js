import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import Intro from '@components/Intro'
import Editor from '@components/Editor'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tweet Fancy in bold, italics and strikethrough text"
      keywords={[
        `tweet`,
        `markdown`,
        `format`,
        `bold`,
        `italics`,
        `strikethrough`,
      ]}
    />
    <Intro />
    <Editor />
  </Layout>
)

export default IndexPage
