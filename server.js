/**
 * Created by youngmoon on 11/9/15.
 */

import path from 'path'
import qs from 'qs'
import Express from 'express'
import React from 'react'
import { renderToString} from 'react-dom/server'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'
import Reducer from './reducers'
import App from './containers/App'

const app = Express()
const PORT = 3000

app.use(Express.static('static'));
app.use(handleRender)

function handleRender (req, res) {
    const store = createStore(Reducer)

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const initialState = store.getState()

    res.send(renderFullPage(html, initialState))
}

function renderFullPage(html, initialState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Youfrica TV</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `
}

app.listen(PORT, function () {
    console.info('Server is listening to ', PORT);
})