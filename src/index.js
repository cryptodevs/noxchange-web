import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Register from './Register'
import registerServiceWorker from './registerServiceWorker';
import RegisterSuccess from './RegisterSuccess';
import Login from './Login';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/register_success" component={RegisterSuccess} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
