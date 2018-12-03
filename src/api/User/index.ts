import {Dispatch} from 'redux';
import axios from 'axios';

import {httpRequest} from 'src/utils';

//actionCreators creators
import * as actions from 'src/store/reducers/user/actions';
//config
import * as config from 'src/config';


/*************************************************************************
 * USER LOGIN FOR BACK-END SERVER
 *************************************************************************/
export const userLogin = (googleIdToken: string) => (dispatch: Dispatch) => {
    dispatch(actions.userLoginRequest());

    const data = {
        'token': googleIdToken
    };

    httpRequest('auth/google', 'POST', data)
        .then((result) => {
            dispatch(actions.userLoginSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.userLoginFail(err.message));
        });

};


/*************************************************************************
 * GET USER INFO FROM GOOGLE
 *************************************************************************/
export const getUserInfo = (accessToken: string) => (dispatch: Dispatch) => {
    dispatch(actions.userInfoFetchRequest());

    //кастомный запрос
    const getUserInfoConfig = {
        method: 'GET',
        url: config.USER_INFO_URL,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    };

    axios(getUserInfoConfig)
        .then((result) => {
            dispatch(actions.userInfoFetchSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.userInfoFetchFail(err.message));
        });

};
