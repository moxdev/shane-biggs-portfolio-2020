import { useStaticQuery, graphql } from 'gatsby'

const useMostRecentTweets = () => {
  const data = useStaticQuery(graphql`
    query {
      recentTweets: allTwitterStatusesUserTimelineMoxBiggs(limit: 3) {
        edges {
          node {
            full_text
          }
        }
      }
    }
  `)

  return data.recentTweets.edges.map(tweet => ({
    fullText: tweet.node.full_text,
  }))
}

export default useMostRecentTweets
