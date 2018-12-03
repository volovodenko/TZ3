import {Component, ReactNode, SyntheticEvent} from 'react';


//container
import LoginContainer,
{IPropsLoginController} from 'src/containers/componentContainer/LoginContainer';
//config
import * as config from 'src/config';
//data types
import {IUserInfoData} from 'src/store/reducers/user/dataTypes';


export default (View: (props: IPropsView) => ReactNode) => {


    class LoginController extends Component<IPropsLoginController> {

        componentDidUpdate() {
            if (this.props.userInfoLoadError || this.props.userLoggingFail) {
                this.props.onSaveErrorMessage('Ошибка входа. Оплять на бэк-энде что-то упало');
            }
        }

        render() {
            const props: IPropsView = {
                handlerLogin: this.handlerLogin,
                handlerLogout: this.handlerLogout,
                userLoggedIn: this.props.userLoggedIn,
                userInfoLoaded: this.props.userInfoLoaded,
                userInfo: this.props.userInfo,
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handlerLogin = (e: SyntheticEvent): void => {
            e.preventDefault();

            //URL на авторизацию google
            const url: string = `${config.AUTH_URL}?redirect_uri=${config.CALLBACK_URL}` +
                `&response_type=code&client_id=${config.CLIENT_ID}` +
                `&scope=profile&access_type=offline&prompt=consent`;

            //положение верхнего левого угла окна авторизации - окно посредине экрана
            const left: number = (window.screen.width - 600) / 2;
            const top: number = (window.screen.height - 600) / 2;

            //открыть отдельное дочернее окно авторизации со строкой запроса "url"
            //окно центрируем по центру экрана
            window.open(url, 'Login with google', `left=${left},top=${top},width=600,height=600`);

            //глобальная функция-колбэк для получения данных из дочернего окна авторизации
            (window as any).sendAccessTokenData = (data: ITokenData) => {
                const googleToken = {
                    expires_in: Date.now() + +data.expires_in * 1000,
                    refresh_token: data.refresh_token,
                };

                localStorage.setItem('gt', JSON.stringify(googleToken));

                this.props.userLogin(data.id_token); //Login for back-end server
                this.props.getUserInfo(data.access_token); //get user info from google api
            };
        };


        handlerLogout = (e: SyntheticEvent): void => {
            e.preventDefault();
            this.props.onUserLogout();
        };

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return LoginContainer(LoginController);

};

export interface IPropsView {
    readonly handlerLogin: (e: SyntheticEvent) => void;
    readonly handlerLogout: (e: SyntheticEvent) => void;
    readonly userLoggedIn: boolean;
    readonly userInfoLoaded: boolean;
    readonly userInfo: IUserInfoData;
}

interface ITokenData {
    readonly access_token: string;
    readonly expires_in: string;
    readonly id_token: string;
    readonly refresh_token: string;
}

