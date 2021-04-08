module.exports = {
  siteMetadata:{
    title: `Twist & Shout Events`,
    description: `Headless CMS`,
    author: `BA_D Agency © 2021`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://twistandshoutevents.com/graphql`,
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `https://twistandshoutevents.com/`,
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          // "**/tags",
          // "**/taxonomies",
          // "**/users",
        ],
        verboseOutput: false,
        minimizeDeprecationNotice: true,
        excludedRoutes: [
          '/wp-json/acf/v3/options/options/?per_page=100&page=1',
          '/wp-json/yoast/v1/indexing/posts?per_page=100&page=1',
          '/wp-json/yoast/v1/link-indexing/posts?per_page=100&page=1',
          '/wp-json/wp/v2/users?per_page=100&page=1',
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
  ],
}
