import { useStaticQuery, graphql } from 'gatsby'

const useAllPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
                fluid {
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
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.fields.slug,
    tag: post.frontmatter.tag,
    excerpt: post.excerpt,
    featuredImage: post.frontmatter.featuredImage,
    featuredImageAlt: post.frontmatter.featuredImageAlt,
  }))
}

export default useAllPosts
