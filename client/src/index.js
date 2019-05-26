import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainAuth from './MainAuth';

ReactDOM.render( <
    Header / > ,
    document.getElementById('header')
);
ReactDOM.render( <
    MainAuth / > ,
    document.getElementById('content')
);