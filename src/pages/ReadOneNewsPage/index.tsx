import React from 'react';

//styles
import styles from './styles.scss';
//controller
import ReadOneNewsPageController,
{IPropsView} from 'src/controllers/pageController/ReadOneNewsPageController';
//components
import {OneNews} from './components';
import {Loading} from 'src/components/Loading';
import {FetchFailMessage} from 'src/components/FetchFailMessage';


const Component = (props: IPropsView) => (
    <main className={styles.readNewsPage}>
        {
            props.readOneNewsFetchFail && props.readOneNewsErrorMessage
                ? <FetchFailMessage message={props.readOneNewsErrorMessage}/>
                :
                props.readOneNewsLoaded
                    ? <OneNews
                        onDeleteNews={props.onDeleteNews}
                        oneNews={props.readOneNews}
                        userId={props.userId}
                    />
                    : <Loading/>
        }
    </main>
);


export const ReadOneNewsPage = ReadOneNewsPageController(Component);
