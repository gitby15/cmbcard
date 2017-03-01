/**
 * Created by timl on 2017/2/28.
 */
/**
 * Created by madlord on 16/1/14.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const PUBLIC_PATH = path.join(__dirname, 'html', 'dist');

module.exports = {
  entry: {
    "index": [path.join(__dirname, 'src', 'index.jsx')]
  },
  output: {
    filename: '[name].js',
    path: PUBLIC_PATH,
    publicPath: './dist/',
    //publicPath:'/op-task/dist/static/',
    chunkFilename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].map'
  },


  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015','stage-0', 'react']
            }
          }
        ],
      },{
        test:/\.css/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true,
              url:true,
              //localIdentName: '[path][name]__[local]--[hash:base64:5]'
              localIdentName: '[name]-[local]-[hash:base64:5]',
              importLoaders:2,
              root:'./'
            },
          },
          'autoprefixer-loader',
        ]
      },{
        test:/\.(jpg|png|gif|svg)$/,
        use:[
          {
            loader:'url-loader',

          }
        ]
      }

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "html"),
    public: "myapp:8015",
    compress: true,
    port: 8080
  }

};
