import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

//api
import {userLogin, getUserInfo} from 'src/api';
//global store type
import {IGlobalStore} from 'src/store/rootReducer';
//actionCreators + data types
import {IUserInfoData} from 'src/store/reducers/user/dataTypes';
import {onUserLogout} from 'src/store/reducers/user/actions';
import {onSaveErrorMessage} from 'src/store/reducers/errorMessage/actions';


export default (Controller: typeof React.Component) => {

    const mapDispatchToProps = {
        userLogin, getUserInfo, onUserLogout,
        onSaveErrorMessage
    };

    const mapStateToProps = (state: IGlobalStore) => ({
        userLoggedIn: state.user.userLoggedIn,
        userLoggingFail: state.user.userLoggingFail,

        userInfoLoaded: state.user.userInfoLoaded,
        userInfoLoadError: state.user.userInfoLoadError,
        userInfo: state.user.userInfo
    });

    const LoginContainer = (props: IDispatchToProps & IStateToProps) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
};

interface IDispatchToProps {
    readonly userLogin: (dispatch: Dispatch) => void;
    readonly getUserInfo: (dispatch: Dispatch) => void;
    readonly onUserLogout: (dispatch: Dispatch) => void;
    readonly onSaveErrorMessage: (dispatch: Dispatch) => void;
}

interface IStateToProps {
    readonly userLoggedIn: boolean;
    readonly userLoggingFail: boolean;

    readonly userInfoLoaded: boolean;
    readonly userInfoLoadError: boolean;
    readonly userInfo: IUserInfoData;
}

export interface IPropsLoginController extends IStateToProps {
    readonly userLogin: (googleIdToken: string) => void;
    readonly getUserInfo: (accessToken: string) => void;
    readonly onUserLogout: () => void;
    readonly onSaveErrorMessage: (message: string) => void;
}
