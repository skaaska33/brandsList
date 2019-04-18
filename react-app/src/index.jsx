import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {brandsReducer} from "./Brands/reducer.js";
import {commonReducer} from "./common/reducer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageContainer from './common/containers/messageContainer.js'
import MainContainer from './brands/containers/brandsContainer.js'
import {setMessage} from "./common/reducer.js"

const store = createStore(
    combineReducers({
        brands: brandsReducer,
        common: commonReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <MessageContainer store={store}/>
        <MainContainer store={store}/>
    </Provider>,
    document.getElementById("react-app"));