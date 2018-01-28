import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./list.scss');

const List = ({mod, children}) => (
    <div className={`list ${mod}`}>
        {children}
    </div>
);

export default List;