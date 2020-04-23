import {createStore, applyMiddleware, compose} from 'redux';
//Import Thunk

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState ={};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() :f => f

    )
)

export default store;