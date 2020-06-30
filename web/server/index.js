import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import matchRoutes  from 'react-router-config/matchRoutes'
import { Provider } from 'react-redux'
import { createMemoryHistory } from "history" // URL模式的history
import configureStore from "../src/app/store/configureStore"
import routeConfig from '../src/route/route.config';
import App from './app'
const CWD = process.cwd()

export default () => {
    return async (req, res, next) => { // 路由中间件
        const __req  = req.req || req
        const __res  = req.req ? req : res
        const __next = req.req ? res : next
        if (__req.url.indexOf('.') > -1) {
      return;
    };
        //creat Store
        const history = createMemoryHistory({ initialEntries: [__req.url] });
        let store = configureStore(history)
        //查找组件
        const branch = matchRoutes(routeConfig, __req.url)[0]
        //得到组件
        const Component = branch.route.component
        //请求对应组件的数据
        if(Component.fetch instanceof Function) {
           const data = await Component.fetch(store)
        }
        const reactStr = renderToString(
            <Provider store={store}>
                <App  location={__req.url}  context={{}}/>
            </Provider>
        )
        const initState = store.getState()
        const file = fs.readFileSync(path.resolve(CWD,'./static/main.html'), 'utf8')
        const serverHtml = file.replace('{app}', reactStr).replace('{initState}',JSON.stringify(initState) ); //然后将index.html里面的特殊字段用react渲染好的dom字符串替换
        __res.type = 'html';
        __res.body = serverHtml
        await __next()
        
      
    }
}