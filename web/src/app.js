import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { createBrowserHistory } from "history" // URL模式的history
import configureStore from "app/store/configureStore"
const store = configureStore(createBrowserHistory)

import App from "./route"

// import asyncComponent from "utils/asyncComponent"
// const Home = asyncComponent(() => import("./home"))
// const About = asyncComponent(() => import("./about"))

const routes = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

const renderDom = () => <Provider store={store}>{routes()}</Provider>

ReactDom.render(
    renderDom(),
    document.getElementById("app")
)
