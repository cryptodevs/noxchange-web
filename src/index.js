import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Register from './Register'
import registerServiceWorker from './registerServiceWorker';
import RegisterSuccess from './RegisterSuccess';
import Login from './Login';
import Balance from './Balance';
import PaymentMethods from './PaymentMethods';
import Khipu from './Khipu';
import Sell from './Sell';
import CoinConfiguration from './CoinConfiguration';
import Buy from './Buy'
import Market from './Market';
import ConfirmBuy from './ConfirmBuy';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/register_success" component={RegisterSuccess} />
            <Route path="/login" component={Login} />
            <Route path="/balance" component={Balance} />
            <Route path="/methods" component={PaymentMethods} />
            <Route path="/setupkhipu" component={Khipu} />
            <Route path="/sell" component={Sell} />
            <Route path="/coinconfiguration/:coin" component={CoinConfiguration} />
            <Route path="/buy" component={Buy} />
            <Route path="/market/:coin" component={Market} />
            <Route path="/confirmbuy/:coin/:id" component={ConfirmBuy} />
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
