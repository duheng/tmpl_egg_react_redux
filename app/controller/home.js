'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const htmlPath = path.join(this.app.config.static.dir, 'main.html')
    console.log('htmlPath----->',process.env.NODE_ENV)
    ctx.type = 'html';
    ctx.body = fs.createReadStream(htmlPath);
  }
}

module.exports = HomeController;
