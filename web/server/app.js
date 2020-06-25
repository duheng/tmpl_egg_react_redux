
import React, { Component, Fragment } from 'react';
import { StaticRouter } from 'react-router';

import Routes from '../src/route/index'

export default class App extends Component {
    render() {
        return (
            <StaticRouter {...this.props}>
                <Routes />
            </StaticRouter>
        )
    }
}