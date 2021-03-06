/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591797370498_9621';

  config.static = {
      dir: path.join(appInfo.baseDir, 'static'),
      prefix: ''
  }

  // add your middleware config here
  config.middleware = ['ssr'];
  config.ssr = {
    enable: true, // 是否开启该中间件，不写默认开启
    match: ['/(.*?)']
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
