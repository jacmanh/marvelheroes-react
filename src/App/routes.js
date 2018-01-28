import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DefaultLayout from 'DefaultLayout/DefaultLayout.jsx'
import ListPage from 'Pages/ListPage'
import DetailPage from 'Pages/DetailPage'

class Routes extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <DefaultLayout path="/character/:id" component={DetailPage} />
          <DefaultLayout path="/" component={ListPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes