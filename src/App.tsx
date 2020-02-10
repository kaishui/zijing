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
import Counter from './containers/ContentContainer';
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <MyComponent backgroundColor='red' ></MyComponent>
        <Counter></Counter>
    </Provider>
    ,
    document.getElementById('root')
);