const path = require('path');

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
