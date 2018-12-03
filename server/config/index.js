import dotenv from 'dotenv';

dotenv.config();//get environment variables from .env

export const APP_ENV = process.env.APP_ENV || 'production';
export const APP_PORT = process.env.PORT || process.env.APP_PORT || '8000';
