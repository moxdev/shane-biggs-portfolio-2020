import { useStaticQuery, graphql } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            featuredImageAlt
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
