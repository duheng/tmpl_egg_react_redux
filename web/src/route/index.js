
import { Route, Switch, Redirect} from "react-router-dom"
import routeConfig from './route.config'

const App = () => {
  return (
      <Switch>
        {
          routeConfig.map(item => <Route key={item.path} {...item} />)
        }
      </Switch>
  )
}

export default App;