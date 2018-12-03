import React from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';
//SVG
import {Pencil, Times} from 'src/components/SVG';


export const EditDeleteIcons = (props: IProps) => (
    <div className={styles.editDelete}>
        <Link to={`/news/${props.newsId}/edit`}>
            <Pencil/>
        </Link>
        <span onClick={props.delete}>
            <Times/>
        </span>
    </div>
);

interface IProps {
    readonly delete: () => void;
    readonly newsId: string;
}

