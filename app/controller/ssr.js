'use strict';
const fs = require('fs');
const path = require('path');
const child_process = require("child_process");
const staticConfig = require("../../web/luban");
const Controller = require('egg').Controller;

const ReactDOMServer = require('../../web/node_modules/react-dom/server')
 const reactDom = require('../../static/js/server').default

class SsrController extends Controller {
  async index() {
    const { ctx } = this;
   // const htmlStr = ReactDOMServer.renderToString(reactDom)
    // const file = fs.readFileSync(path.join(__dirname, '../../static/main.html'), 'utf8')
    // const serverHtml = file.replace('<!-- app -->', htmlStr); //然后将index.html里面的特殊字段用react渲染好的dom字符串替换

    // ctx.type = 'html';
    // ctx.body = fs.createReadStream(serverHtml);
  }
}

module.exports = SsrController;
