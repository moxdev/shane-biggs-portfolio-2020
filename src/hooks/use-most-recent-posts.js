import { useStaticQuery, graphql } from 'gatsby'

const useMostRecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, sort: { order: ASC, fields: frontmatter___date }) {
        nodes {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            featuredImageAlt
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  duotone: { shadow: "#333333", highlight: "#dfe7ea" }
                ) {
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
    id: post.id,
    slug: post.fields.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    excerpt: post.excerpt,
    featuredImageAlt: post.frontmatter.featuredImageAlt,
    featuredImage: post.frontmatter.featuredImage,
  }))
}

export default useMostRecentPosts
