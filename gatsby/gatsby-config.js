import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

//
export default {
  pathPrefix: '/pizza',
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // use the object syntax when adding plugsin that require options
      resolve: 'gatsby-source-sanity', // this is the name of the plugin
      options: {
        projectId: '1u9cglkp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
