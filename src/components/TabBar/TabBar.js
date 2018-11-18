import React from 'react';
import { Link } from 'react-router-dom';
import './TabBar.less';
import { slide, scale } from '../../transitions';


const TabBar = () => (
  <div className="TabBar">
    <Link to={{
      pathname: '/',
      state: slide,
    }}
    >
Home
    </Link>
    <Link to={{
      pathname: '/about',
      state: scale,
    }}
    >
About

    </Link>
    <Link to={{
      pathname: '/details',
      state: slide,
    }}
    >
Details
    </Link>
  </div>
);

export default TabBar;
