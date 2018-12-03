import {Dispatch} from 'redux';

import {actionTypes} from '../actionTypes';
import * as acTypes from './acTypes';
import {clearNewsErrors} from '../news/actions';


/*************************************************************************
 * SAVE ERROR MESSAGE ACTION CREATORS
 *************************************************************************/
const saveErrorMessage = (error: string): acTypes.ISaveErrorMessage => ({
    type: actionTypes.SAVE_ERROR_MESSAGE,
    payload: error
});


export const onSaveErrorMessage = (error: string) => (dispatch: Dispatch) => {
    dispatch(saveErrorMessage(error));
    setTimeout(() => dispatch(clearNewsErrors()), 100);
};


/*************************************************************************
 * CLEAR ERROR MESSAGE ACTION CREATORS
 *************************************************************************/
const clearErrorMessage = (): acTypes.IClearErrorMessage => ({
    type: actionTypes.CLEAR_ERROR_MESSAGE,
});

export const onClearErrorMessage = () => (dispatch: Dispatch) => {
    dispatch(clearErrorMessage());
};
