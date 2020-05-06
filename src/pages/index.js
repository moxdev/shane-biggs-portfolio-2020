import React from 'react'
// import useMostRecentPosts from '../hooks/use-most-recent-posts'
import usePosts from '../hooks/use-posts'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'
import Image from '../components/image'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO pageTitle="Home" />
      <h1>Iron Maiden</h1>
      <p>40 years of metal!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
