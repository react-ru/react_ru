import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { TelegramLogin } from './lib/TelegramLogin'
import { Authentication } from './Authentication'
import { Default as DefaultLayout } from './layouts/Default'
import { Index } from './pages/Index'
import { NotFound } from './pages/NotFound'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Authentication provider={TelegramLogin}>
      {({ isAuthenticated }) => (
        <DefaultLayout>
          <Router>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Router>
        </DefaultLayout>
      )}
    </Authentication>
  </React.StrictMode>,
  document.getElementById('root')
)
