import React from 'react'
import { css } from '@emotion/core'
import useMostRecentPosts from '../hooks/use-most-recent-posts'
import useMostRecentTweets from '../hooks/use-most-recent-tweets'

import Layout from '../layouts/page-layout'
import SEO from '../components/seo'
// import Image from '../components/image'
import MostRecentPostCard from '../components/most-recent-post-card'
import TwitterCard from '../components/twitter-card'

const IndexPage = () => {
  const mostRecentPosts = useMostRecentPosts()
  const mostRecentTweets = useMostRecentTweets()

  return (
    <Layout>
      <SEO pageTitle="Home" />
      <h1>Hey look at me!</h1>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      <h2>Read my blog</h2>
      {mostRecentPosts.map(post => (
        <MostRecentPostCard key={post.id} post={post} />
      ))}

      <section className="most-recent-twitter-posts">
        <h2>Recent Tweets</h2>
        <div
          className="twitter-card-container"
          css={css`
            display: flex;
            flex-wrap: wrap;

            > div {
              flex: 0 1 33%;
            }
          `}
        >
          {mostRecentTweets.map(tweet => (
            <TwitterCard tweet={tweet} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
