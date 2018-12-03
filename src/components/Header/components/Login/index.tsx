import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';
//SVG
import {SignIn, SignOut} from 'src/components/SVG';
//controller
import LoginController, {IPropsView} from 'src/controllers/componentController/LoginController';


const Component = (props: IPropsView) => (
    <div className={styles.login}>
        {
            props.userInfoLoaded && props.userLoggedIn
                ?
                <Fragment>
                    <span>
                        <img src={props.userInfo.picture}/>
                    </span>
                    <span>{props.userInfo.given_name}</span>
                    <span>|</span>
                    <Link to='/logout' onClick={props.handlerLogout}>
                        <span>Выйти</span>
                        <SignOut/>
                    </Link>
                </Fragment>
                :
                <Fragment>
                    <Link to='/login' onClick={props.handlerLogin}>
                        <span>Войти</span>
                        <SignIn/>
                    </Link>
                </Fragment>
        }

    </div>
);

export const Login = LoginController(Component);
