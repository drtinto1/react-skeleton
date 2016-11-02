import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Layouts
import MainLayout from './components/layouts/main-layout'

// Views
import NoMatch from './components/views/no-match'

// Containers
import MatchListContainer from './components/containers/match-list-container'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={MatchListContainer} />

            <Route path="match">
                <IndexRoute component={MatchListContainer} />
            </Route>

            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
)