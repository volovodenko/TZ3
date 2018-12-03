import {Component, ReactNode} from 'react';
import axios from 'axios';


//config
import * as config from 'src/config';


/**
 * Контроллер получения access_token от гугла
 * @param View
 */
export default (View: () => ReactNode) => {

    class Oauth2callbackPageController extends Component {
        code: string = null;

        constructor(props: {}) {
            super(props);

            this.getCode();
        }


        componentDidMount() {
            if (this.code) {
                //делаем белый overlay для окна
                const divOverlay = document.createElement('div');
                divOverlay.style.position = 'fixed';
                divOverlay.style.backgroundColor = 'white';
                divOverlay.style.zIndex = '10000';
                divOverlay.style.top = '0';
                divOverlay.style.bottom = '0';
                divOverlay.style.right = '0';
                divOverlay.style.left = '0';
                document.body.appendChild(divOverlay);

                //получаем access_token
                this.getAccessToken();
            }
        }


        render() {
            return View();
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /**
         * get secure api code from uri string
         */
        private getCode() {
            const codeString = window.location.search
                .split('&')
                .find(item => item.includes('code'));
            if (codeString) {
                //при первом входе в коде вместо '/' -'%2F', поэтому если он есть - меняем его на '/'
                //иначе гугл считает код неверным
                this.code = codeString.slice(6).replace(/%2F/g, '/');
            }
        }


        /**
         * get access_token from google api
         */
        private getAccessToken() {
            const data = {
                code: this.code,
                redirect_uri: config.CALLBACK_URL,
                client_id: config.CLIENT_ID,
                client_secret: config.CLIENT_SECRET,
                scope: 'profile', //скоуп "profile" указывается для получения инфо пользователя
                grant_type: 'authorization_code'
            };


            //формирование данных для отправки при Content-Type=application/x-www-form-urlencoded
            //начало
            const formData = new FormData();

            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            //конец


            const loginConfig = {
                method: 'POST',
                url: config.TOKEN_URL,
                data: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            axios(loginConfig)
                .then((result) => {
                    //здесь получаем access_token

                    //передаем данные в родительское окно
                    window.opener.sendAccessTokenData(result.data);
                    window.close(); //закрываем окно авторизации
                })
                .catch((err) => {
                    window.opener.console.log(err.message);
                    window.close(); //закрываем окно авторизации
                });
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return Oauth2callbackPageController;

};
