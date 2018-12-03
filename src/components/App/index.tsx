import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

//styles
import './styles.scss';
//routes
import {routes} from 'src/routes';
//components
import {Header} from '../Header';
import {Footer} from '../Footer';
import {ErrorMessage} from '../ErrorMessage';


export const App = () => {
    return (
        <Fragment>
            <Header/>
            <main className='wrapper'>
                <Switch>
                    {
                        routes.map(route => (
                            <Route
                                key={route.name}
                                exact={route.isExact}
                                path={route.path}
                                component={route.component}
                            />
                        ))
                    }
                </Switch>
            </main>
            <Footer/>
            <ErrorMessage/>
        </Fragment>
    );
};
