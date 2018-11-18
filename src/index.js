import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Transitions from './transitions';


import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import TabBar from './components/TabBar';

import SlideUpAndDown from './animations/SlideUpAndDown';

import './styles/base.less';

/* eslint-disable react/no-children-prop */
const App = () => (
  <Router>
    <React.Fragment>
      <Route
        render={({ location }) => (
          <div style={{ height: '100%' }}>
            <Transitions pageKey={location.key} {...location.state}>
              <Switch location={location}>
                <Route path="/about" component={About} />
                <Route path="/details" component={Details} />
                <Redirect from="/" to="/about" />
              </Switch>
            </Transitions>
          </div>
        )}
      />
      <TabBar />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
