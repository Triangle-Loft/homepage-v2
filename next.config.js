const {
  ENVIRONMENT,
  SENTRY_DSN,
  TIME_INTERVAL
} = require('config')

const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ['digitalax.imgix.net', 'digitalax.mypinata.cloud', 'espa.s3.eu-central-1.amazonaws.com'],
  },
  publicRuntimeConfig: {
    ENVIRONMENT,
    SENTRY_DSN,
    TIME_INTERVAL
  },
  // trailingSlash: true,
  // assetPrefix: './',
  // future: { webpack5: true },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  webpack(cfg, { isServer }) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };

    if (!isServer) {
      cfg.node = {
        ws: 'empty',
      };
    }
    return cfg;
  },
});
