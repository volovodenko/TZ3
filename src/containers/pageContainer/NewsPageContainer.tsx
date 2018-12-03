import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

//api
import {getNews, postNews, deleteNews} from 'src/api';
//global store type
import {IGlobalStore} from 'src/store/rootReducer';
//actionCreators + data types
import {IGetNews, IPostNewsDataSend} from 'src/store/reducers/news/dataTypes';
import {onSaveErrorMessage} from 'src/store/reducers/errorMessage/actions';


export default (Controller: typeof React.Component) => {

    const mapDispatchToProps = {
        getNews, postNews, deleteNews,
        onSaveErrorMessage

    };

    const mapStateToProps = (state: IGlobalStore) => ({
        newsLoaded: state.news.newsLoaded,
        newsList: state.news.newsList,
        newsDeleteFail: state.news.newsDeleteFail,
        newsDeleteErrorMessage: state.news.newsDeleteErrorMessage,

        userLoggedIn: state.user.userLoggedIn,
        userId: state.user.userId
    });

    const NewsPageContainer = (props: IDispatchToProps & IStateToProps) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(NewsPageContainer);
};



interface IDispatchToProps {
    readonly getNews: (dispatch: Dispatch) => void;
    readonly postNews: (dispatch: Dispatch) => void;
    readonly deleteNews: (dispatch: Dispatch) => void;
    readonly onSaveErrorMessage: (dispatch: Dispatch) => void;
}

interface IStateToProps {
    readonly newsLoaded: boolean;
    readonly newsList: IGetNews[];
    readonly newsDeleteFail: boolean;
    readonly newsDeleteErrorMessage: string;

    readonly userLoggedIn: boolean;
    readonly userId: string;
}

export interface INewsPageController extends IStateToProps {
    readonly getNews: () => void;
    readonly postNews: (data: IPostNewsDataSend) => void;
    readonly deleteNews: (id: string) => void;
    readonly onSaveErrorMessage: (message: string) => void;
}

