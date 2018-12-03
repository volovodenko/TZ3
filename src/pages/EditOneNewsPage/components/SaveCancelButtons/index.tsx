import React from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';


export const SaveCancelButtons = (props: IProps) => (
    <div className={styles.saveCancelButtons}>
        <button onClick={props.onSaveNews}>Сохранить</button>
        <Link to={`/news/${props.newsId}`}>Отменить</Link>
    </div>
);


interface IProps {
    readonly onSaveNews: () => void;
    readonly newsId: string;
}

