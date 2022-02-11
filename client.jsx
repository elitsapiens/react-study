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
import TicTacToe from './src/TicTacToe/TicTacToe';
import Games from './react-router/Games';
// import { hot } from 'react-hot-loader/root'; //react-router 사용시 빠져야 할 부분

// const Hot = hot(Games); //react-router 사용시 빠져야 할 부분
ReactDom.render(<Games/>, document.querySelector('#root'));