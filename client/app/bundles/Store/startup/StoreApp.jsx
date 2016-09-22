import React from 'react';
import ReactOnRails from 'react-on-rails';

import Store from '../containers/Store';

const StoreApp = (props) => (
  <Store {...props} />
);

ReactOnRails.register({ StoreApp });
