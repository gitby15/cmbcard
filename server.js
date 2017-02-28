/**
 * Created by timl on 2017/2/28.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
const internalIP = require('internal-ip');
let config = require('./webpack.config.js');

const port = 8015;
const ip = internalIP.v4();

for (let key in config.entry) {
  let arr = config.entry[key];
  arr.unshift("webpack-dev-server/client?http://"+ip+":"+port+"/", "webpack/hot/dev-server")
}

config.plugins = config.plugins || [];
config.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config),config.devServer).listen(port,ip,(err) => {
  if(err){
    console.error(err);
  }
  console.log('Listening at localhost:' + port);
  console.log('Opening your system browser...');
  //open('http://'+(internalIP.v4()||'127.0.0.1')+':' + port);

});