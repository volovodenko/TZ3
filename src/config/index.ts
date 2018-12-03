export const APP_ENV: string = process.env.APP_ENV || 'production';
export const APP_PORT: string = process.env.APP_PORT || '3000';
export const APP_URL: string = process.env.APP_URL || 'http://localhost';
export const DEV_MODE: boolean = APP_ENV !== 'production';

export const API_ROOT = 'https://secret-taiga-20560.herokuapp.com/api/v1';

export const CLIENT_ID: string = process.env.CLIENT_ID || '';
export const CLIENT_SECRET: string = process.env.CLIENT_SECRET || '';
export const AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
export const TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
export const USER_INFO_URL = 'https://www.googleapis.com/oauth2/v1/userinfo';
export const CALLBACK_URL: string = DEV_MODE || APP_URL === 'http://localhost'
    ? `${APP_URL}:${APP_PORT}/Oauth2callback`
    : `${APP_URL}/Oauth2callback`;

export const TIMEOUT_ERROR_MESSAGE = 5000;



