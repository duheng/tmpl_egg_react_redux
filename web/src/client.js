import ReactDom from "react-dom"
//import { BrowserRouter } from "react-router-dom"

  import {  BrowserRouter as Router,Route, Switch, Redirect} from "react-router-dom"
import App from "./route"

import {Provider} from "react-redux"
import { createBrowserHistory } from "history" // URL模式的history

import configureStore from "app/store/configureStore"


 const store = configureStore(createBrowserHistory,window.__INITIAL_STATE__)

// import asyncComponent from "utils/asyncComponent"
// const Home = asyncComponent(() => import("./home"))
// const About = asyncComponent(() => import("./about"))
const url = store.getState().url;
const routes = () => (
    <Router location={ url }>
          <App/>
    </Router>
)
const renderDom = () => {
    return <Provider store={store}>{routes()}</Provider>
}

ReactDom.hydrate(
    renderDom(),
    document.getElementById("app")
)
