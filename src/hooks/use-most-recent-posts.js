// import { useStaticQuery, graphql } from 'gatsby'

// const useMostRecentPosts = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMdx(limit: 3, sort: { order: ASC }) {
//         nodes {
//           id
//           excerpt
//           frontmatter {
//             title
//             date
//             customSlug
//             tags
//           }
//         }
//       }
//     }
//   `)

//   return data.allMdx.nodes.map(post => ({
//     title: post.frontmatter.title,
//     date: post.frontmatter.date,
//     customSlug: post.frontmatter.customSlug,
//     tag: post.frontmatter.tag,
//     excerpt: post.excerpt,
//     id: post.id,
//   }))
// }

// export default useMostRecentPosts
