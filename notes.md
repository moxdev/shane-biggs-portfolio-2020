# css props using emotion

- `<Nav fontWeight="bold"></Nav>`
- Tell css to use either the specified fontWeight or default to 'normal
  - `font-weight: ${(props) => props.fontWeight || 'normal'}`

# Debugging a hook

```js
const posts = usePosts()

{post.map(post => (

  <pre>{JSON.stringify(post, null, 2)}</pre>

))}
```

## Gatsby Background Image
[gatsby-background-image](https://www.gatsbyjs.org/packages/gatsby-background-image/)


## Twitter API
[gatsby-source-twitter](https://www.gatsbyjs.org/packages/gatsby-source-twitter/)