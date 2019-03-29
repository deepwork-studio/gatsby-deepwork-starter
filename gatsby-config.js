module.exports = {
  siteMetadata: {
    title: `Gatsby Deep Work Starter`,
    description: `Kick off your next project with Deep Work Studio & Gatsby`,
    author: `@deepwork_studio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-deepwork-starter`,
        short_name: `deepwork`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {}
    }
  ]
};
