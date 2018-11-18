import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transitions.less';

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = props => child => React.cloneElement(child, props);

export default ({
  transition = '', duration = 0, pageKey, children,
}) => (
  <TransitionGroup
    style={{ height: '100%' }}
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition timeout={duration} key={pageKey}>
      {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
      <div>{ children }</div>
    </CSSTransition>
  </TransitionGroup>
);

export { default as slide } from './slide';
export { default as scale } from './scale';
