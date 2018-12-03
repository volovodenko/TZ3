import {actionTypes} from '../actionTypes';
import * as acTypes from './acTypes';
import * as dataTypes from './dataTypes';


/*************************************************************************
 * GET ALL NEWS ACTION CREATORS
 *************************************************************************/
export const getNewsFetchRequest =
    (): acTypes.IGetNewsFetchRequest => ({
        type: actionTypes.GET_NEWS_FETCH_REQUEST
    });

export const getNewsFetchSuccess =
    (data: dataTypes.IGetNewsDataReceive): acTypes.IGetNewsFetchSuccess => ({
        type: actionTypes.GET_NEWS_FETCH_SUCCESS,
        payload: data
    });

export const getNewsFetchFail =
    (error: dataTypes.IFetchError): acTypes.IGetNewsFetchFail => ({
        type: actionTypes.GET_NEWS_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * GET READ ONE NEWS ACTION CREATORS
 *************************************************************************/
export const readOneNewsFetchRequest =
    (): acTypes.IGetReadOneNewsFetchRequest => ({
        type: actionTypes.GET_READ_ONE_NEWS_FETCH_REQUEST
    });

export const readOneNewsFetchSuccess =
    (data: dataTypes.IGetReadOneNewsReceive): acTypes.IGetReadOneNewsFetchSuccess => ({
        type: actionTypes.GET_READ_ONE_NEWS_FETCH_SUCCESS,
        payload: data
    });

export const readOneNewsFetchFail =
    (error: dataTypes.IFetchError): acTypes.IGetReadOneNewsFetchFail => ({
        type: actionTypes.GET_READ_ONE_NEWS_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * POST NEWS ACTION CREATORS
 *************************************************************************/
export const postNewsFetchRequest =
    (): acTypes.IPostNewsFetchRequest => ({
        type: actionTypes.POST_NEWS_FETCH_REQUEST
    });

export const postNewsFetchSuccess =
    (data: dataTypes.IPostNewsDataReceive): acTypes.IPostNewsFetchSuccess => ({
        type: actionTypes.POST_NEWS_FETCH_SUCCESS,
        payload: data
    });

export const postNewsFetchFail =
    (error: dataTypes.IFetchError): acTypes.IPostNewsFetchFail => ({
        type: actionTypes.POST_NEWS_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * DELETE NEWS ACTION CREATORS
 *************************************************************************/
export const deleteNewsFetchRequest =
    (): acTypes.IDeleteNewsFetchRequest => ({
        type: actionTypes.DELETE_NEWS_FETCH_REQUEST
    });

export const deleteNewsFetchSuccess =
    (data: dataTypes.IDeleteNewsDataReceive): acTypes.IDeleteNewsFetchSuccess => ({
        type: actionTypes.DELETE_NEWS_FETCH_SUCCESS,
        payload: data
    });

export const deleteNewsFetchFail =
    (error: dataTypes.IFetchError): acTypes.IDeleteNewsFetchFail => ({
        type: actionTypes.DELETE_NEWS_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * UPDATE NEWS ACTION CREATORS
 *************************************************************************/
export const updateNewsFetchRequest =
    (): acTypes.IUpdateNewsFetchRequest => ({
        type: actionTypes.UPDATE_NEWS_FETCH_REQUEST
    });

export const updateNewsFetchSuccess =
    (data: dataTypes.IUpdateNewsReceive): acTypes.IUpdateNewsFetchSuccess => ({
        type: actionTypes.UPDATE_NEWS_FETCH_SUCCESS,
        payload: data
    });

export const updateNewsFetchFail =
    (error: dataTypes.IFetchError): acTypes.IUpdateNewsFetchFail => ({
        type: actionTypes.UPDATE_NEWS_FETCH_FAIL,
        payload: error
    });


/*************************************************************************
 * CLEAR NEWS ERRORS ACTION CREATORS
 *************************************************************************/
export const clearNewsErrors =
    (): acTypes.IClearNewsErrors => ({
        type: actionTypes.CLEAR_NEWS_ERROR
    });


