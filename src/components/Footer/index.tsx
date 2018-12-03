import React from 'react';


import styles from './styles.scss';


export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.info}>
                <p>&copy;2018. Все права защищены.</p>
                <p>При копировании материалов ссылка обязательна.</p>
                <p>Ты, это....пиши если че: <a href='mailto:volovodenko@gmail.com'>volovodenko@gmail.com</a></p>
            </div>
        </div>
    </footer>
);
