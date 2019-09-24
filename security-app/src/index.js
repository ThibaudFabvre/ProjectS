import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';

const rootComponent = (
    <Provider store={store}>
        <Router basename="/">
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

const target = document.getElementById('root');

render(rootComponent, target);
