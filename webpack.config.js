const path = require('path');
const { VueLoaderPlugin} = require('vue-loader')


module.exports = {
  mode: 'development', // сменив на production и запустив gulp build сделает минификацию js
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'source/js/scripts'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      /*{
        test: /\.vue$/,
        loader: 'vue-loader'
      },*/
      /*{
        test: /\.(png|jpe?g)$/,
        loaders: [
          {
            loader: 'lqip-loader',
            options: {
              path: '/media', // your image going to be in media folder in the output dir
              name: '[name].[ext]', // you can use [hash].[ext] too if you wish,
              base64: true, // default: true, gives the base64 encoded image
              palette: true // default: false, gives the dominant colours palette
            }
          }
        ]
      },*/
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  },
  /*plugins: [
    new VueLoaderPlugin(),
  ]*/
};
