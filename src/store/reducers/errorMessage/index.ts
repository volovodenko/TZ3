import initialState, {IStoreErrorMessage} from './initialState';
import {actionTypes} from '../actionTypes';
import {Action} from './acTypes';


export const errorMessage = (stateStore: IStoreErrorMessage = initialState, action: Action): IStoreErrorMessage => {

    switch (action.type) {

        /*************************************************************************
         * SAVE ERROR MESSAGE
         *************************************************************************/
        case actionTypes.SAVE_ERROR_MESSAGE:
            return {
                ...stateStore,
                message: action.payload,
            };


        /*************************************************************************
         * CLEAR ERROR MESSAGE
         *************************************************************************/
        case actionTypes.CLEAR_ERROR_MESSAGE:
            return {
                ...stateStore,
                message: null
            };


        /*************************************************************************
         * DEFAULT
         *************************************************************************/
        default:
            return stateStore;
    }

};
