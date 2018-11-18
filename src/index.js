import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import TabBar from './components/TabBar';

import './styles/base.less';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details" component={Details} />
      </Switch>
      <TabBar />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
