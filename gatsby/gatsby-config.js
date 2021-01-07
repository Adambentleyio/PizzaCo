import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

//
export default {
  siteMetadata: {
    title: `Slicks slices`,
    url: `https://gatsbyImage.pizza`,
    description: `Best Pizza in Town`,
  },

  plugins: [
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
