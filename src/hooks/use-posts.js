import { useStaticQuery, graphql } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3) {
        nodes {
          id
          excerpt
          frontmatter {
            title
            date
            customSlug
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    customSlug: post.frontmatter.customSlug,
    featuredImage: post.frontmatter.featuredImage,
    tag: post.frontmatter.tag,
    excerpt: post.excerpt,
    id: post.id,
  }))
}

export default usePosts
