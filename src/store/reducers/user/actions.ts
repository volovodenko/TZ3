import {Dispatch} from 'redux';

import {actionTypes} from '../actionTypes';
import * as acTypes from './acTypes';
import * as dataTypes from './dataTypes';


/*************************************************************************
 * USER LOGIN ACTION CREATORS
 *************************************************************************/
export const userLoginRequest =
    (): acTypes.IUserLoginRequest => ({
        type: actionTypes.USER_LOGIN_REQUEST
    });

export const userLoginSuccess =
    (data: dataTypes.IUserLoginData): acTypes.IUserLoginSuccess => ({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data
    });

export const userLoginFail =
    (error: dataTypes.IUserError): acTypes.IUserLoginFail => ({
        type: actionTypes.USER_LOGIN_FAIL,
        payload: error
    });


/*************************************************************************
 * USER GET INFO ACTION CREATORS
 *************************************************************************/
export const userInfoFetchRequest =
    (): acTypes.IUserInfoFetchRequest => ({
        type: actionTypes.USER_INFO_FETCH_REQUEST
    });

export const userInfoFetchSuccess =
    (data: dataTypes.IUserInfoData): acTypes.IUserInfoFetchSuccess => ({
        type: actionTypes.USER_INFO_FETCH_SUCCESS,
        payload: data
    });

export const userInfoFetchFail =
    (error: dataTypes.IUserError): acTypes.IUserInfoFetchFail => ({
        type: actionTypes.USER_INFO_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * USER LOGOUT
 *************************************************************************/
const userLogout = (): acTypes.IUserLogout => ({
    type: actionTypes.USER_LOGOUT
});


export const onUserLogout = () => (dispatch: Dispatch) => {
    dispatch(userLogout());
};


