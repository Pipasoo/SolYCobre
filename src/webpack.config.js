const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, 'src/img'),
      },
    },
  };
  