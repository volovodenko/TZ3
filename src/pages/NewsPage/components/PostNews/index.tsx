import React, {Fragment, RefObject} from 'react';

//styles
import styles from './styles.scss';
//SVG
import {MinusSquare, PlusSquare} from 'src/components/SVG';


export const PostNews = (props: IProps) => (
    <div className={styles.postNews}>
        <div className={styles.addNews}>
            <h3>Загнать новость</h3>
            <span onClick={props.postNewsVisibleToggle}>
                {
                    props.postNewsVisible
                        ? <MinusSquare/>
                        : <PlusSquare/>
                }
            </span>
        </div>
        {
            props.postNewsVisible
                ?
                <Fragment>
                    <input
                        type='text'
                        placeholder='Четкий заголовок'
                        ref={props.postTitleRef}
                    />
                    <textarea
                        placeholder='Нашкрябай маленько о событиях на районе'
                        ref={props.postContentRef}
                    />
                    <button onClick={props.onPostNews}>Гнать</button>
                </Fragment>
                : null
        }

    </div>
);

interface IProps {
    readonly postNewsVisibleToggle: () => void;
    readonly onPostNews: () => void;
    readonly postNewsVisible: boolean;
    readonly postTitleRef: RefObject<HTMLInputElement>;
    readonly postContentRef: RefObject<HTMLTextAreaElement>;
}
