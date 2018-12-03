import {combineReducers} from 'redux';


import {user, errorMessage, news} from './reducers';
import {IStoreUser} from './reducers/user/initialState';
import {IStoreErrorMessage} from './reducers/errorMessage/initialState';
import {IStoreNews} from './reducers/news/initialState';


export default combineReducers<IGlobalStore>(
    {
        user,
        errorMessage,
        news,
    }
);

export interface IGlobalStore {
    user: IStoreUser;
    errorMessage: IStoreErrorMessage;
    news: IStoreNews;
}

