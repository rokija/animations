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

// how to set animation on inital page load?

/* eslint-disable react/no-children-prop */
const App = () => (
  <Router>
    <React.Fragment>
      <Route
        render={({ location }) => (
          <div style={{ height: '100%' }}>
            <TransitionGroup
              childFactory={child => React.cloneElement(
                child,
                {
                  classNames: (location.state && location.state.transition) || 'scale',
                  timeout: (location.state && location.state.duration) || 500,
                },
              )}
            >
              <CSSTransition
                key={location.key}
                timeout={500}
              >
                <div>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/about"
                      render={() => <About />}
                    />
                    <Route exact path="/details" render={() => <Details />} />
                    <Route exact path="/" render={() => <Home />} />

                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
      <TabBar />
    </React.Fragment>
  </Router>
);

// /* eslint-disable react/no-children-prop */
// const App = () => (
//   <Router>
//     <React.Fragment>
//       <Route
//         render={({ location }) => (
//           <div style={{ height: '100%' }}>
//             <Transitions pageKey={location.key} {...location.state}>
//               <Switch location={location}>
//                 <Route path="/about" component={About} />
//                 <Route path="/details" component={Details} />
//                 <Redirect from="/" to="/about" />
//               </Switch>
//             </Transitions>
//           </div>
//         )}
//       />
//       <TabBar />
//     </React.Fragment>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById('root'));
