'use strict';
const fs = require('fs');
const path = require('path');
const child_process = require("child_process");
const staticConfig = require("../../web/luban");
const Controller = require('egg').Controller;
// const { StaticRouter } = require('react-router')

// const   App  = require('../../static/js/server').default
// const  { renderToString } = require('react-dom/server')
class SsrController extends Controller {
  async index() {
    const { ctx } = this;
    const { path, url } = ctx
    // if (url.indexOf('.') > -1) {
    //   return;
    // };
  //     const reactStr = renderToString(App)
     //  console.log('reactDom----', reactStr)
  // const htmlStr = renderToString(reactDom)
    // const file = fs.readFileSync(path.join(__dirname, '../../static/main.html'), 'utf8')
    // const serverHtml = file.replace('<!-- app -->', htmlStr); //然后将index.html里面的特殊字段用react渲染好的dom字符串替换
    // ctx.type = 'html';
    // ctx.body = serverHtml
  }
}

module.exports = SsrController;
