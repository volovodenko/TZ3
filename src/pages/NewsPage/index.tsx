import React from 'react';

//styles
import styles from './styles.scss';
//controller
import NewsPageController,
{IPropsView} from 'src/controllers/pageController/NewsPageController';
//components
import {PostNews, NewsList} from './components';
import {Loading} from 'src/components/Loading';


const Component = (props: IPropsView) => (
    <main className={styles.newsPage}>
        <h1>Че там на районе</h1>
        <PostNews
            postNewsVisibleToggle={props.postNewsVisibleToggle}
            postNewsVisible={props.postNewsVisible}
            onPostNews={props.onPostNews}
            postTitleRef={props.postTitleRef}
            postContentRef={props.postContentRef}
        />
        {
            props.newsLoaded
                ?
                props.newsList.length
                    ? <NewsList
                        newsList={props.newsList}
                        onDeleteNews={props.onDeleteNews}
                        userId={props.userId}
                    />
                    : <div className={styles.emptyNews}>
                        Никто еще не загонял. Начни первым.
                    </div>
                : <Loading/>
        }
    </main>
);


export const NewsPage = NewsPageController(Component);
