import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './app'
const CWD = process.cwd()
export default () => {
    return async (req, res, next) => { // 路由中间件
        const __req = req.req || req
        const __res = req.req ? req : res
        const __next = req.req ? res : next

        const rootApp = <App  location={__req.url}/>
        const reactStr = renderToString(rootApp)
        const file = fs.readFileSync(path.resolve(CWD,'./static/main.html'), 'utf8')
        const serverHtml = file.replace('<!-- app -->', reactStr); //然后将index.html里面的特殊字段用react渲染好的dom字符串替换
        
        __res.type = 'html';
        __res.body = serverHtml
       await __next()
    }
}