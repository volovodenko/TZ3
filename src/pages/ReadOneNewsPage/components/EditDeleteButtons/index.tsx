import React from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';


export const EditDeleteButtons = (props: IProps) => (
    <div className={styles.editDeleteButtons}>
        <Link to={`/news/${props.newsId}/edit`}>Редактировать</Link>
        <button onClick={props.delete}>Удалить</button>
    </div>
);


interface IProps {
    readonly delete: () => void;
    readonly newsId: string;
}
