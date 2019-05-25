import React from 'react';
import ReactDOM from 'react-dom';
import SimpleHeader from './SimpleHeader';
import MainAuth from './MainAuth';

ReactDOM.render( <
    SimpleHeader / > ,
    document.getElementById('header')
);
ReactDOM.render( <
    MainAuth / > ,
    document.getElementById('content')
);