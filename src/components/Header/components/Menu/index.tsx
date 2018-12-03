import React from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';
//SVG
import {Home} from 'src/components/SVG';


export const Menu = () => (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link to='/'>
                    <Home/>
                </Link>
            </li>
            <li>
                <Link to='/news'>
                    Новости
                </Link>
            </li>
        </ul>
    </nav>
);
