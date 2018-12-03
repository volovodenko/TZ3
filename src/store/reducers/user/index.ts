import initialState, {IStoreUser} from './initialState';
import {actionTypes} from '../actionTypes';
import {Action} from './acTypes';


export const user = (stateStore: IStoreUser = initialState, action: Action): IStoreUser => {

    switch (action.type) {

        /*************************************************************************
         * USER LOGIN FOR BACK-END SERVER
         *************************************************************************/
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...stateStore,
                userLoggingIn: true,
                userLoggingFail: false
            };


        case actionTypes.USER_LOGIN_SUCCESS:
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            localStorage.setItem('userId', JSON.stringify(action.payload.userId));

            return {
                ...stateStore,
                userId: action.payload.userId,
                userLoggingIn: false,
                userLoggedIn: true
            };


        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...stateStore,
                userLoggingIn: false,
                userLoggingFail: true
            };

        /*************************************************************************
         * GET USER INFO FROM GOOGLE
         *************************************************************************/
        case actionTypes.USER_INFO_FETCH_REQUEST:
            return {
                ...stateStore,
                userInfoLoading: true,
                userInfoLoadError: false
            };


        case actionTypes.USER_INFO_FETCH_SUCCESS:

            const userInfo = {
                given_name: action.payload.given_name,
                picture: action.payload.picture,
                name: action.payload.name,
            };

            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            return {
                ...stateStore,
                userInfo,
                userInfoLoading: false,
                userInfoLoaded: true
            };


        case actionTypes.USER_INFO_FETCH_FAIL:
            return {
                ...stateStore,
                userInfoLoading: false,
                userInfoLoadError: true
            };

        /*************************************************************************
         * USER LOGOUT
         *************************************************************************/
        case actionTypes.USER_LOGOUT:
            window.localStorage.removeItem('gt');
            window.localStorage.removeItem('userInfo');
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userId');

            return {
                ...stateStore,
                userId: null,
                userInfo: null,
                userInfoLoaded: false,
                userLoggedIn: false,
            };

        /*************************************************************************
         * DEFAULT
         *************************************************************************/
        default:
            return stateStore;
    }

};
