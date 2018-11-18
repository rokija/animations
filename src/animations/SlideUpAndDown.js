import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './SlideUpAndDown.less';

const SlideUpAndDown = ({
  show, children, enterTimeOut, leaveTimeOut,
}) => (
  <CSSTransition
    in={show}
    classNames={{
      enter: 'SlideUpAndDown-enter',
      enterActive: 'SlideUpAndDown-enter-active',
      appear: 'SlideUpAndDown-enter',
      appearActive: 'SlideUpAndDown-enter-active',
      exit: 'SlideUpAndDown-exit',
      exitActive: 'SlideUpAndDown-exit-active',
    }}
    timeout={{ enter: enterTimeOut, exit: 1000 }}
    unmountOnExit
    appear
    enter
    exit
  >
    {children}
  </CSSTransition>
);

SlideUpAndDown.propTypes = {
  children: PropTypes.node,
  enterTimeOut: PropTypes.number,
  leaveTimeOut: PropTypes.number,
  show: PropTypes.bool,
};

SlideUpAndDown.defaultProps = {
  enterTimeOut: 500,
  leaveTimeOut: 500,
  children: null,
  show: false,
};

export default SlideUpAndDown;
