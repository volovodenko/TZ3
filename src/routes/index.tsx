import React, {ComponentClass, FunctionComponent} from 'react';

//pages
import * as pages from 'src/pages';


export const routes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: pages.MainPage
    },
    {
        name: 'News List Page',
        path: '/news',
        isExact: true,
        component: pages.NewsPage
    },
    {
        name: 'Read One News Page',
        path: '/news/:newsId',
        isExact: true,
        component: pages.ReadOneNewsPage
    },
    {
        name: 'Edit One News Page',
        path: '/news/:newsId/edit',
        isExact: true,
        component: pages.EditOneNewsPage
    },
    {
        //сюда будет перенаправление после успешной авторизации google
        //здесь заберем код авторизации, по нему получим токены и закроем окно
        //сама страница ничего не отображает, только обрабатывается логика получения токенов google
        name: 'Oauth2 Callback Page',
        path: '/Oauth2callback',
        isExact: true,
        component: pages.Oauth2callbackPage
    },
    {
        name: 'Not Found',
        path: '*',
        isExact: false,
        component: pages.NotFoundPage
    },
];


interface IRoute {
    name: string;
    path: string;
    isExact: boolean;
    component: ComponentClass | FunctionComponent;
}
