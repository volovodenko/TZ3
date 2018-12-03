import React from 'react';
import classNames from 'classnames';

//styles
import styles from './styles.scss';

//controller
import ErrorMessageController,
{IPropsView} from 'src/controllers/componentController/ErrorMessageController';


const Component = (props: IPropsView) => (
    <div
        className={
            classNames(
                styles.error,
                props.errorActive ? styles.active : null
            )
        }
    >
        {props.errorMessage}
    </div>
);

export const ErrorMessage = ErrorMessageController(Component);
