const config = require('./config');

module.exports = {
  // pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: `https://theamericas.beartigerproductions.com/`,
    image: "/images/icon.jpg",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-fastify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-preload-fonts',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`, // Placeholder type
          quality: 50, // Lower quality for faster builds
        },
        failOn: `none`, // Replaces deprecated failOnError
        stripMetadata: true,
        defaultQuality: 75,
        concurrency: 2, // Limit concurrency to reduce memory usage
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
        ignore: [`**/unused/**`], // Ignore unused directories
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        disable: process.env.NODE_ENV !== 'production',
      },
    },
  ],
};
