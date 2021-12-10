import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
