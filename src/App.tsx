import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { World } from './components/World';
import { Layout } from './page/Index';
import { Provider } from 'react-redux';
// @ts-ignore
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/Index';
import MyComponent from './containers/CounterContainer';

// @ts-ignore
import thunk from 'redux-thunk';
import LayoutContainer from './containers/LayoutContainer';
// @ts-ignore
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
            <LayoutContainer></LayoutContainer>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);