import React from 'react';


import styles from './styles.scss';


export const NotFoundPage = () => {
    window.scrollTo(0, 0); //обнулить прокрутку

    return <div className={styles.notFound}>
        <h2>Упс...страница не найдена</h2>

        <div>
            Мы думаем это потому что:
            <ul>
                <li>в адресной строке была допущена ошибка</li>
                <li>а может мы просто удалили эту страницу :)</li>
            </ul>
        </div>

        <div>
            Что делать?
            <ul>
                <li>Перейдите на главную и начните поиск с нее</li>
                <li>Перейдите по навигационным ссилкам вверху или внизу сайта</li>
            </ul>
        </div>

    </div>;
};
