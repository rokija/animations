import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from './components/Home';

import './styles/base.less';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
