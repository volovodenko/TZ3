import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';


export default function configStore() {
    const env = process.env.NODE_ENV;
    const devMode = env === 'development';


    return createStore(
        rootReducer,

        //for enable Redux DevTools Extension
        devMode ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
    );
}
