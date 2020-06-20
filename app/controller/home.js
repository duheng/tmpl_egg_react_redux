'use strict';
const fs = require('fs');
const path = require('path');
const child_process = require("child_process"); 
const staticConfig = require("../../web/luban"); 
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const htmlName = Object.keys(staticConfig.entry)[0]
     
       var suffix = path.extname(ctx.url);
         console.log('htmlPath----->',ctx.url)
    if(process.env.NODE_ENV !== 'development') {
    	 const htmlPath = path.join(this.app.config.static.dir, `${htmlName}.html`)
    	    ctx.type = 'html';
         ctx.body = fs.createReadStream(htmlPath);
    } else {
    	 const { host, port } = staticConfig
    	 const htmlPath = `http://${host}:${port}/${htmlName}.html`
		 const curl = `curl ${htmlPath}`
		 
		 const child = await child_process.exec(curl); 
		  
	     ctx.body = child.stdout;
    }
  }
}

module.exports = HomeController;
