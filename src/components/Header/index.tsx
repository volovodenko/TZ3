import React from 'react';

//styles
import styles from './styles.scss';
//components
import {Menu, Login} from './components';


export const Header = () => (
    <header className={styles.header}>
        <div className={styles.menuWrapper}>
            <Menu/>
            <Login/>
        </div>
    </header>
);
