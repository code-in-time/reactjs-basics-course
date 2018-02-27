import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Box } from './components/Box';
import { Parent } from './components/Parent';
import Root from './components/Root';
import User from './components/User';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Root} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('app'));
