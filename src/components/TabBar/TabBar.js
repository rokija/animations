import React from 'react';
import { Link } from 'react-router-dom';
import './TabBar.less';

const TabBar = () => (
  <div className="TabBar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/details">Details</Link>
  </div>
);

export default TabBar;
