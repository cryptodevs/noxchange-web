import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import Register from './components/Register'
import registerServiceWorker from './registerServiceWorker';
import RegisterSuccess from './components/RegisterSuccess';
import Login from './components/Login';
import Balance from './components/Balance';
import PaymentMethods from './components/PaymentMethods';
import Khipu from './components/Khipu';
import Sell from './components/Sell';
import CoinConfiguration from './components/CoinConfiguration';
import Buy from './components/Buy'
import Market from './components/Market';
import ConfirmBuy from './components/ConfirmBuy';
import configureStore from './services/reducers'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
