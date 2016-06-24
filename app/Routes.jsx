import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

const Routes = (
    <Route>
        <Route path="/" component={Layout}>
            <Redirect from="/" to="/home"/>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Route>);

export default Routes
