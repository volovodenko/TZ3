import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

//api
import {getOneNews, deleteNews} from 'src/api';
//global store type
import {IGlobalStore} from 'src/store/rootReducer';
//data types
import {IGetNews} from 'src/store/reducers/news/dataTypes';
//dispatcher
import {onSaveErrorMessage} from 'src/store/reducers/errorMessage/actions';


export default (Controller: typeof React.Component) => {

    const mapDispatchToProps = {
        getOneNews, deleteNews,
        onSaveErrorMessage
    };

    const mapStateToProps = (state: IGlobalStore) => ({
        readOneNews: state.news.readOneNews,
        readOneNewsLoaded: state.news.readOneNewsLoaded,
        readOneNewsFetchFail: state.news.readOneNewsFetchFail,
        readOneNewsErrorMessage: state.news.readOneNewsErrorMessage,
        newsDeleted: state.news.newsDeleted,
        newsList: state.news.newsList,
        newsLoaded: state.news.newsLoaded,

        userId: state.user.userId
    });

    const ReadOneNewsPageContainer = (props: IDispatchToProps & IStateToProps) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(ReadOneNewsPageContainer);
};


interface IDispatchToProps {
    readonly getOneNews: (dispatch: Dispatch) => void;
    readonly deleteNews: (dispatch: Dispatch) => void;
    readonly onSaveErrorMessage: (dispatch: Dispatch) => void;
}

interface IStateToProps {
    readonly newsList: IGetNews[];
    readonly newsLoaded: boolean;
    readonly readOneNews: IGetNews;
    readonly readOneNewsLoaded: boolean;
    readonly readOneNewsFetchFail: boolean;
    readonly readOneNewsErrorMessage: string;
    readonly newsDeleted: boolean;

    readonly userId: string;

    readonly match: {
        params: {
            newsId: string;
        };
    };
}

export interface IReadOneNewsPageController extends IStateToProps {
    readonly getOneNews: (id: string) => void;
    readonly deleteNews: (id: string) => void;
    readonly onSaveErrorMessage: (message: string) => void;
}


