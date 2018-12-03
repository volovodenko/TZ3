import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

//styles
import styles from './styles.scss';
//utils
import {getDate} from 'src/utils';
//data types
import {IGetNews} from 'src/store/reducers/news/dataTypes';
//components
import {EditDeleteIcons} from 'src/components/EditDeleteIcons';


export const NewsList = (props: IProps) => (
    <ul className={styles.newsList}>
        {
            props.newsList.map(item => (
                <li key={item._id}>

                    <div className={styles.top}>
                        <div className={styles.title}>
                            <h3>
                                <Link to={`/news/${item._id}`}>
                                    {item.title}
                                </Link>
                            </h3>
                        </div>
                        {
                            item.creator._id === props.userId
                                ? <EditDeleteIcons newsId={item._id} delete={props.onDeleteNews(item._id)}/>
                                : null
                        }
                    </div>

                    <div className={styles.header}>
                        <span><img src={item.creator.picture} alt='author'/></span>
                        <span>{item.creator.displayName}</span>
                        <span>|</span>
                        <span>{getDate(item.createdAt)}</span>
                        {
                            item.updatedAt !== item.createdAt
                                ? <span className={styles.edited}>edited</span>
                                : null
                        }
                    </div>

                    <div className={styles.content}>
                        {
                            item.content.length > 200
                                ?
                                <Fragment>
                                    {item.content.slice(0, 200)}
                                    &nbsp;...
                                </Fragment>
                                : item.content
                        }
                    </div>
                </li>
            ))
        }
    </ul>
);


interface IProps {
    readonly newsList: IGetNews[];
    readonly onDeleteNews: (postId: string) => () => void;
    readonly userId: string;
}
