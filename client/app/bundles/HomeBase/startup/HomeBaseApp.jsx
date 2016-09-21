import React from 'react';
import ReactOnRails from 'react-on-rails';

import HomeBase from '../containers/HomeBase';

const HomeBaseApp = (props) => (
  <HomeBase {...props} />
);

ReactOnRails.register({ HomeBaseApp });
