import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'scenes/header/header';
import Home from 'scenes/home/home';
import 'styled/app/global.styled';

ReactDOM.render(
    <div>
        <Header/>
        <Home/>
    </div>,
    document.getElementById('app')
);