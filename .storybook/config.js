import { addDecorator, configure } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// for using router aware components in storybook
addDecorator(StoryRouter());

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);