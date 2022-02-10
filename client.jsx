// const React = require('react');
// const ReactDom = require('react-dom');

// const WordRelay = require('./WordRelay');
// const NumberBaseball = require('./NumberBaseball');

import React from 'react';
import ReactDom from 'react-dom';
import NumberBaseball from './src/NumberBaseball/NumberBaseball';
import ResponseCheck from './src/ResponseCheck/ResponseCheck';
import RSPClass from './src/RSP/RSPClass';
import Lotto from './src/Lotto/Lotto';
import { hot } from 'react-hot-loader/root';

const Hot = hot(Lotto);
ReactDom.render(<Hot/>, document.querySelector('#root'));