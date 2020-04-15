/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Shane Biggs Web Developer`,
    author: `Shane Biggs`,
    description: `A web development portfolio website for Shane Biggs.`,
    siteUrl: `https://shanebiggs.com/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/moxbiggs`,
      },
      {
        name: `github`,
        url: `https://github.com/moxdev`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // FIGURE OUT a11y functionality later
    // {
    //   resolve: 'gatsby-plugin-react-axe',
    //   options: {
    //     // Integrate react-axe in production. This defaults to false.
    //     showInProduction: false,

    //     // Options to pass to axe-core.
    //     // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
    //     axeOptions: {
    //       // Your axe-core options.
    //     },
    //     // Context to pass to axe-core.
    //     // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
    //     axeContext: {
    //       // Your axe-core context.
    //     },
    //   },
    // },
  ],
}
