module.exports = {
  "host": "127.0.0.1",
  "port": "3001",
  "platform": "react",
  "ui_plug":"antd",
  "base": "web/src",
  "build": "./static",
  "dll": "dll",
  "server": "web/server", 
  "static": {
    "development": "",
    "production": ""
  },
  "api": {
    "development": "",
    "production": "//api.luban.com/"
  },
  "entry": {'main':'./web/src/client.js'},
  "library": {
     "vendor": ['react', 'react-dom']
  },
  "alias": {},
  "devtool": "source-map",
  "css_modules": false,
  "template": {
    "title": "鲁班",
    "keywords": "后裔",
    "description": "",
    "viewport": "",
    "favicon": "",
    "path": "template.html"
  },
  "pages": "pages",
  "components": "components",
  "scss": "scss",
  "cpmode": "react",
  "base64_image_limit": 10240
}
