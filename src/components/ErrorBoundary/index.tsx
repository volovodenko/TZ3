import React, {Component} from 'react';

import styles from './styles.scss';

interface IState {
    readonly hasError: boolean;
}


export class ErrorBoundary extends Component {

    readonly state: IState = {
        hasError: false
    };


    componentDidCatch(error: Error | null, info: object) {
        this.setState({
            hasError: true
        });

        console.error(info);
    }


    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.error}>
                    <h2>Упс....что то пошло не так. Ошибка в работе приложения</h2>
                </div>
            );
        }

        return this.props.children;
    }

}
