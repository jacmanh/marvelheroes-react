/**
 * This is a layout for header, nav, footer, etc...
 */

import React from 'react';
import { Route } from 'react-router-dom';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="site">
          <div className="page">
            <Component {...matchProps} />
          </div>
      </div>
    )}
  />
);

export default DefaultLayout;
