import axios from 'axios';

//config
import * as config from 'src/config';


export const httpRequest = async (url: string, method: string = 'GET', data: object = null) => {
    await refreshToken();


    const token = JSON.parse(localStorage.getItem('token'));


    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
    };

    return axios(
        {
            method,
            url: `${config.API_ROOT}/${url}`,
            data,
            headers
        }
    );
};

export const checkResponse = (response: IResponse) => {
    if (response.status === 200) {
        return true;
    }

    throw new Error(response.statusText);
};


interface IResponse {
    status: number;
    statusText: string;
}




//здесь мне было уже влом писать.....поэтому тут немного бардак
//обновляем токены если истек срок
const refreshToken = () => {

    const googleToken = localStorage.getItem('gt')
        ? JSON.parse(localStorage.getItem('gt'))
        : null;

    if (googleToken && ((googleToken.expires_in - Date.now()) < 600000) ) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const data = {
            client_id: config.CLIENT_ID,
            client_secret: config.CLIENT_SECRET,
            refresh_token: googleToken.refresh_token,
            grant_type: 'refresh_token'
        };

        //формирование данных для отправки при Content-Type=application/x-www-form-urlencoded
        //начало
        const formData = new FormData();

        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        //конец


        const configData = {
            method: 'POST',
            data: formData,
            url: config.TOKEN_URL,
            headers
        };


        return axios(configData)
            .then((result) => {

                const gT = {
                    expires_in: Date.now() + +result.data.expires_in * 1000,
                    refresh_token: googleToken.refresh_token,
                };

                localStorage.setItem('gt', JSON.stringify(gT));

                const config2 = {
                    url: `${config.API_ROOT}/auth/google`,
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    data: {
                        'token': result.data.id_token
                    }
                };

                return axios(config2);

            })
            .then((result) => {
                localStorage.setItem('token', JSON.stringify(result.data.token));
            })
            .catch((err) => {
                console.log(err.message);
            });

    }
};
