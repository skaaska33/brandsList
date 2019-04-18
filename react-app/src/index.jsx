import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {brandsReducer} from "./Brands/reducer.js";
import {commonReducer} from "./common/reducer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import TransitionClass from "./commonComponents/TransitionClass/TransitionClass.jsx"
import MessageContainer from './common/containers/messageContainer.js'
import {setMessage} from "./common/reducer.js"


const store = createStore(
    combineReducers({
        brands: brandsReducer,
        common: commonReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <TransitionClass
            timeout={300}
            children={<MessageContainer store={store}/>}/>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                   <h1>Hello world</h1>
                </div>
            </div>
        </div>
    </Provider>,
    document.getElementById("react-app"));