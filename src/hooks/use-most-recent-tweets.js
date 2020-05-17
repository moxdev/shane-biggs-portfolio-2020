import { useStaticQuery, graphql } from 'gatsby'

const useMostRecentTweets = () => {
  const data = useStaticQuery(graphql`
    query {
      recentTweets: allTwitterStatusesUserTimelineMoxBiggs(limit: 4) {
        edges {
          node {
            full_text
            user {
              profile_image_url_https
              screen_name
              name
            }
            entities {
              media {
                media_url_https
              }
            }
            extended_entities {
              media {
                media_url_https
              }
            }
          }
        }
      }
    }
  `)

  return data.recentTweets.edges.map(tweet => ({
    text: tweet.node.full_text,
    profilePic: tweet.node.user.profile_image_url_https,
    name: tweet.node.user.name,
    screenName: tweet.node.user.screen_name,
    mediaUrl: tweet.node.entities.media,
  }))
}

export default useMostRecentTweets
