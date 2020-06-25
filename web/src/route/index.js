import React, { Fragment } from 'react';
import { Route, Switch, Redirect} from "react-router-dom"
import routeConfig from './route.config'

export default  () => {
    return (
      <Switch>
        {
          routeConfig.map( (item,index) => <Route key={index} path={item.path} exact={item.exact}  render={() => <item.component {...item} />} />)
        }
      </Switch>
    )
}
