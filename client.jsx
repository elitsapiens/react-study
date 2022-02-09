// const React = require('react');
// const ReactDom = require('react-dom');

// const WordRelay = require('./WordRelay');
// const NumberBaseball = require('./NumberBaseball');

import React from 'react';
import ReactDom from 'react-dom';
import NumberBaseball from './src/NumberBaseball/NumberBaseball';
import ResponseCheck from './src/ResponseCheck/ResponseCheck';
import RSPClass from './src/RSP/RSPClass';
import { hot } from 'react-hot-loader/root';

const Hot = hot(RSPClass);
ReactDom.render(<Hot/>, document.querySelector('#root'));