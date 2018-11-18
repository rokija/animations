import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';

import { withViewport, configureViewport } from '@storybook/addon-viewport';
import '../styles/base.less';

import Home from '../components/Home';

const viewports = {
  iphone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block',
      boxShadow: 'none',
    },
    type: 'desktop',
  },
};

configureViewport({
  viewports,
});

addDecorator(withViewport('iphone6'));

storiesOf('Home', module)
  .add('for testing, Home', () => (
    <Home />
  ));
