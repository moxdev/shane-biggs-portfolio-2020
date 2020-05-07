import React from 'react'
import useMostRecentPosts from '../hooks/use-most-recent-posts'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'
import Image from '../components/image'
import MostRecentPostCard from '../components/most-recent-post-card'

const IndexPage = () => {
  const mostRecentPosts = useMostRecentPosts()

  return (
    <Layout>
      <SEO pageTitle="Home" />
      <h1>Hey look at me!</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <h2>Read my blog</h2>
      {mostRecentPosts.map(post => (
        <MostRecentPostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
