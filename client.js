/**
 * Created by youngmoon on 11/9/15.
 */

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-reudx'
import App from './containers/App'
import RootReducer from './reducers'

const initialState = window.__INITIAL_STATE__

const store = createStore(RootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)