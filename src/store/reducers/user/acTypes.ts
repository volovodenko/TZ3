import {actionTypes} from '../actionTypes';
import * as dataTypes from './dataTypes';

/*************************************************************************
 * USER LOGIN ACTION CREATORS TYPE
 *************************************************************************/
/**
 * LOGIN REQUEST
 */
export interface IUserLoginRequest {
    type: actionTypes.USER_LOGIN_REQUEST;
}

/**
 * LOGIN SUCCESS
 */
export interface IUserLoginSuccess {
    type: actionTypes.USER_LOGIN_SUCCESS;
    payload: dataTypes.IUserLoginData;

}

/**
 * LOGIN FAIL
 */
export interface IUserLoginFail {
    type: actionTypes.USER_LOGIN_FAIL;
    payload: dataTypes.IUserError;
}


/*************************************************************************
 * USER GET INFO ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IUserInfoFetchRequest {
    type: actionTypes.USER_INFO_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IUserInfoFetchSuccess {
    type: actionTypes.USER_INFO_FETCH_SUCCESS;
    payload: dataTypes.IUserInfoData;

}

/**
 * FETCH FAIL
 */
export interface IUserInfoFetchFail {
    type: actionTypes.USER_INFO_FETCH_FAIL;
    payload: dataTypes.IUserError;
}


/*************************************************************************
 * USER LOGOUT ACTION CREATORS TYPE
 *************************************************************************/
export interface IUserLogout {
    type: actionTypes.USER_LOGOUT;
}



/*************************************************************************
 * EXPORT TYPE ACTIONS CREATORS
 *************************************************************************/
export type Action =
    IUserLoginRequest |
    IUserLoginSuccess |
    IUserLoginFail |
    IUserInfoFetchRequest |
    IUserInfoFetchSuccess |
    IUserInfoFetchFail |
    IUserLogout;
