import React, {Fragment} from 'react';

//styles
import styles from './styles.scss';
//utils
import {getDate} from 'src/utils';
//components
import {EditDeleteIcons} from 'src/components/EditDeleteIcons';
import {EditDeleteButtons} from '../../components';
//data type
import {IGetNews} from 'src/store/reducers/news/dataTypes';


export const OneNews = (props: IProps) => (
    <Fragment>
        <h1>Полный расклад малявы</h1>
        <div className={styles.readNews}>

            <div className={styles.top}>
                <div className={styles.title}>
                    <h3>{props.oneNews.title}</h3>
                </div>
                {
                    props.oneNews.creator._id === props.userId
                        ? <EditDeleteIcons
                            newsId={props.oneNews._id}
                            delete={props.onDeleteNews(props.oneNews._id)}
                        />
                        : null
                }
            </div>

            <div className={styles.header}>
                <span><img src={props.oneNews.creator.picture} alt='author'/></span>
                <span>{props.oneNews.creator.displayName}</span>
                <span>|</span>
                <span>{getDate(props.oneNews.createdAt)}</span>
                {
                    props.oneNews.updatedAt !== props.oneNews.createdAt
                        ? <span className={styles.edited}>edited</span>
                        : null
                }
            </div>

            <div className={styles.content}>
                {props.oneNews.content}
            </div>

        </div>
        {
            props.oneNews.creator._id === props.userId
                ? <EditDeleteButtons
                    newsId={props.oneNews._id}
                    delete={props.onDeleteNews(props.oneNews._id)}/>
                : null
        }
    </Fragment>
);


interface IProps {
    readonly userId: string;
    readonly oneNews: IGetNews;
    readonly onDeleteNews: (postId: string) => () => void;
}

