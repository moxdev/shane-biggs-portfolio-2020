import { useStaticQuery, graphql } from 'gatsby'

const useMostRecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, sort: { order: ASC, fields: frontmatter___date }) {
        edges {
          node {
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
    }
  `)

  return data.allMdx.edges.map(post => ({
    id: post.node.id,
    slug: post.node.fields.slug,
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date,
    tags: post.node.frontmatter.tags,
    excerpt: post.node.excerpt,
    featuredImageAlt: post.node.frontmatter.featuredImageAlt,
    featuredImage: post.node.frontmatter.featuredImage,
  }))
}

export default useMostRecentPosts
