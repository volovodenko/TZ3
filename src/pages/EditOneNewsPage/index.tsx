import React from 'react';

//styles
import styles from './styles.scss';
//controller
import EditOneNewsPageController,
{IPropsView} from 'src/controllers/pageController/EditOneNewsPageController';
//components
import {EditOneNews} from './components';
import {Loading} from 'src/components/Loading';
import {FetchFailMessage} from 'src/components/FetchFailMessage';


const Component = (props: IPropsView) => (
    <main className={styles.editNewsPage}>
        {
            props.readOneNewsFetchFail && props.readOneNewsErrorMessage
                ? <FetchFailMessage message={props.readOneNewsErrorMessage}/>
                :
                props.readOneNewsLoaded
                    ? <EditOneNews
                        titleRef={props.titleRef}
                        contentRef={props.contentRef}
                        title={props.title}
                        content={props.content}
                        onChangeTitle={props.onChangeTitle}
                        onChangeContent={props.onChangeContent}
                        newsId={props.newsId}
                        onSaveNews={props.onSaveNews}
                    />
                    : <Loading/>
        }
    </main>
);


export const EditOneNewsPage = EditOneNewsPageController(Component);
