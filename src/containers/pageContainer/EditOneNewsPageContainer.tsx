import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

//api
import {getOneNews, updateNews} from 'src/api';
//global store type
import {IGlobalStore} from 'src/store/rootReducer';
//data types
import {IGetNews, IPostNewsDataSend} from 'src/store/reducers/news/dataTypes';
//dispatcher
import {onSaveErrorMessage} from 'src/store/reducers/errorMessage/actions';


export default (Controller: typeof React.Component) => {

    const mapDispatchToProps = {
        getOneNews, updateNews,
        onSaveErrorMessage
    };

    const mapStateToProps = (state: IGlobalStore) => ({
        newsList: state.news.newsList,
        newsLoaded: state.news.newsLoaded,
        readOneNews: state.news.readOneNews,
        readOneNewsLoaded: state.news.readOneNewsLoaded,
        readOneNewsFetchFail: state.news.readOneNewsFetchFail,
        readOneNewsErrorMessage: state.news.readOneNewsErrorMessage,
        newsIsUpdated: state.news.newsIsUpdated

    });

    const EditOneNewsPageContainer = (props: IDispatchToProps & IStateToProps) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(EditOneNewsPageContainer);
};


interface IDispatchToProps {
    readonly getOneNews: (dispatch: Dispatch) => void;
    readonly updateNews: (dispatch: Dispatch) => void;
    readonly onSaveErrorMessage: (dispatch: Dispatch) => void;
}

interface IStateToProps {
    readonly newsList: IGetNews[];
    readonly newsLoaded: boolean;
    readonly readOneNews: IGetNews;
    readonly readOneNewsLoaded: boolean;
    readonly readOneNewsFetchFail: boolean;
    readonly readOneNewsErrorMessage: string;
    readonly newsIsUpdated: boolean;

    readonly match: {
        params: {
            newsId: string;
        };
    };
}


export interface IEditOneNewsPageController extends IStateToProps {
    readonly getOneNews: (id: string) => void;
    readonly updateNews: (id: string, data: IPostNewsDataSend) => void;
    readonly onSaveErrorMessage: (message: string) => void;
}


