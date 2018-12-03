import {actionTypes} from '../actionTypes';


/*************************************************************************
 * SAVE ERROR MESSAGE ACTION CREATORS TYPE
 *************************************************************************/
export interface ISaveErrorMessage {
    type: actionTypes.SAVE_ERROR_MESSAGE;
    payload: string;
}


/*************************************************************************
 * CLEAR ERROR MESSAGE ACTION CREATORS TYPE
 *************************************************************************/
export interface IClearErrorMessage {
    type: actionTypes.CLEAR_ERROR_MESSAGE;
}


/*************************************************************************
 * EXPORT ALL TYPES OF ACTION CREATORS
 *************************************************************************/
export type Action =
    ISaveErrorMessage |
    IClearErrorMessage ;
