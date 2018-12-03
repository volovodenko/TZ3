import React, {Fragment, RefObject} from 'react';

//styles
import styles from './styles.scss';
//components
import {SaveCancelButtons} from '../../components';


export const EditOneNews = (props: IProps) => (
    <Fragment>
        <h1>Редактирование малявы</h1>
        <div className={styles.editNews}>
            <input
                type='text'
                placeholder='Четкий заголовок'
                ref={props.titleRef}
                value={props.title}
                onChange={props.onChangeTitle}
            />
            <textarea
                placeholder='Нашкрябай маленько о событиях на районе'
                ref={props.contentRef}
                value={props.content}
                onChange={props.onChangeContent}
            />
        </div>
        <SaveCancelButtons
            onSaveNews={props.onSaveNews}
            newsId={props.newsId}
        />
    </Fragment>
);


interface IProps {
    readonly onSaveNews: () => void;
    readonly titleRef: RefObject<HTMLInputElement>;
    readonly contentRef: RefObject<HTMLTextAreaElement>;
    readonly onChangeTitle: () => void;
    readonly onChangeContent: () => void;
    readonly title: string;
    readonly content: string;

    readonly newsId: string;
}

