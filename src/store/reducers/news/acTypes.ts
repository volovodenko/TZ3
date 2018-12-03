import {actionTypes} from '../actionTypes';
import * as dataTypes from './dataTypes';

/*************************************************************************
 * GET READ ONE NEWS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IGetReadOneNewsFetchRequest {
    type: actionTypes.GET_READ_ONE_NEWS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IGetReadOneNewsFetchSuccess {
    type: actionTypes.GET_READ_ONE_NEWS_FETCH_SUCCESS;
    payload: dataTypes.IGetReadOneNewsReceive;

}

/**
 * FETCH FAIL
 */
export interface IGetReadOneNewsFetchFail {
    type: actionTypes.GET_READ_ONE_NEWS_FETCH_FAIL;
    payload: dataTypes.IFetchError;
}



/*************************************************************************
 * GET ALL NEWS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IGetNewsFetchRequest {
    type: actionTypes.GET_NEWS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IGetNewsFetchSuccess {
    type: actionTypes.GET_NEWS_FETCH_SUCCESS;
    payload: dataTypes.IGetNewsDataReceive;

}

/**
 * FETCH FAIL
 */
export interface IGetNewsFetchFail {
    type: actionTypes.GET_NEWS_FETCH_FAIL;
    payload: dataTypes.IFetchError;
}


/*************************************************************************
 * POST NEWS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IPostNewsFetchRequest {
    type: actionTypes.POST_NEWS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IPostNewsFetchSuccess {
    type: actionTypes.POST_NEWS_FETCH_SUCCESS;
    payload: dataTypes.IPostNewsDataReceive;

}

/**
 * FETCH FAIL
 */
export interface IPostNewsFetchFail {
    type: actionTypes.POST_NEWS_FETCH_FAIL;
    payload: dataTypes.IFetchError;
}


/*************************************************************************
 * DELETE NEWS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IDeleteNewsFetchRequest {
    type: actionTypes.DELETE_NEWS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IDeleteNewsFetchSuccess {
    type: actionTypes.DELETE_NEWS_FETCH_SUCCESS;
    payload: dataTypes.IDeleteNewsDataReceive;
}

/**
 * FETCH FAIL
 */
export interface IDeleteNewsFetchFail {
    type: actionTypes.DELETE_NEWS_FETCH_FAIL;
    payload: dataTypes.IFetchError;
}


/*************************************************************************
 * UPDATE NEWS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IUpdateNewsFetchRequest {
    type: actionTypes.UPDATE_NEWS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IUpdateNewsFetchSuccess {
    type: actionTypes.UPDATE_NEWS_FETCH_SUCCESS;
    payload: dataTypes.IUpdateNewsReceive;
}

/**
 * FETCH FAIL
 */
export interface IUpdateNewsFetchFail {
    type: actionTypes.UPDATE_NEWS_FETCH_FAIL;
    payload: dataTypes.IFetchError;
}


/*************************************************************************
 * CLEAR NEWS ERROR ACTION CREATORS TYPE
 *************************************************************************/
export interface IClearNewsErrors {
    type: actionTypes.CLEAR_NEWS_ERROR;
}


/*************************************************************************
 * EXPORT ALL TYPES OF ACTION CREATORS
 *************************************************************************/
export type Action =
    IGetReadOneNewsFetchRequest |
    IGetReadOneNewsFetchSuccess |
    IGetReadOneNewsFetchFail |
    IGetNewsFetchRequest |
    IGetNewsFetchSuccess |
    IGetNewsFetchFail |
    IPostNewsFetchRequest |
    IPostNewsFetchSuccess |
    IPostNewsFetchFail |
    IDeleteNewsFetchRequest |
    IDeleteNewsFetchSuccess |
    IDeleteNewsFetchFail |
    IUpdateNewsFetchRequest |
    IUpdateNewsFetchSuccess |
    IUpdateNewsFetchFail |
    IClearNewsErrors;
