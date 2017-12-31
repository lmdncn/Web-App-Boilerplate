import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';
import App from './components/App/AppContainer';

import './styles/styles.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install({
//     onUpdating: () => {
//         console.log('SW Event:', 'onUpdating');
//     },
//     onUpdateReady: () => {
//         console.log('SW Event:', 'onUpdateReady');
//         OfflinePluginRuntime.applyUpdate();
//     },
//     onUpdated: () => {
//         console.log('SW Event:', 'onUpdated');
//         // window.location.reload(); // Only needed with autoUpdates
//     },
//     onUpdateFailed: () => {
//         console.log('SW Event:', 'onUpdateFailed');
//     }
// });

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))
render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('react-container'));