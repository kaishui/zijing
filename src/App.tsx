import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { World } from './components/World';
import { Page } from './page/Index';
import { Provider } from 'react-redux';
import { ConfigProvider, Button, DatePicker} from "antd";
import "./app.less"




import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/Index';
import MyComponent from './containers/CounterContainer';

import thunk from 'redux-thunk';
import LayoutContainer from './containers/LayoutContainer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ConfigProvider>
                <LayoutContainer></LayoutContainer>
            </ConfigProvider>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);