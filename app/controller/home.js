'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const htmlPath = path.join(__dirname,'../../web/dist/main.html');
    ctx.type = 'html';
    ctx.body = fs.createReadStream(htmlPath);
  }
}

module.exports = HomeController;
