# css props using emotion
- `<Nav fontWeight="bold"></Nav>`
- Tell css to use either the specified fontWeight or default to 'normal
  - `font-weight: ${(props) => props.fontWeight || 'normal'}`