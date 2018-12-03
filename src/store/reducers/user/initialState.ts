import {IUserInfoData} from './dataTypes';


const userId = localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('userId'))
    : null;


const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const googleToken = localStorage.getItem('gt')
    ? JSON.parse(localStorage.getItem('gt'))
    : null;

const serverToken = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null;

const userInfoLoaded = !!(googleToken && userInfo);

const userLoggedIn = !!(googleToken && serverToken);


const initialState: IStoreUser = {
    userId,
    userLoggingIn: false,
    userLoggedIn,
    userLoggingFail: false,

    userInfo,
    userInfoLoading: false,
    userInfoLoaded,
    userInfoLoadError: false
};

export default initialState;


export interface IStoreUser {
    readonly userId: string;
    readonly userLoggingIn: boolean;
    readonly userLoggedIn: boolean;
    readonly userLoggingFail: boolean;

    readonly userInfo: IUserInfoData;
    readonly userInfoLoading: boolean;
    readonly userInfoLoaded: boolean;
    readonly userInfoLoadError: boolean;
}
