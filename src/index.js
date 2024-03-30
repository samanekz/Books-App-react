import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDom.root(el);

root.render(<App/>);

