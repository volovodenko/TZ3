import React, {Component, ReactNode} from 'react';
import {Redirect} from 'react-router-dom';

//container
import ReadOneNewsPageContainer,
{IReadOneNewsPageController} from 'src/containers/pageContainer/ReadOneNewsPageContainer';
//data types
import {IGetNews} from 'src/store/reducers/news/dataTypes';

export default (View: (props: IPropsView) => ReactNode) => {

    class ReadOneNewsPageController extends Component<IReadOneNewsPageController> {

        private readonly oneNews: IGetNews;


        constructor(props: IReadOneNewsPageController) {
            super(props);

            const newsId = this.props.match.params.newsId;

            if (this.props.newsLoaded) {
                this.oneNews = this.props.newsList.find(item => item._id === newsId);
            }

            //если новость уже есть в списке newsList - не загружаем
            this.oneNews || this.props.getOneNews(newsId);
        }


        render() {
            if (this.props.newsDeleted) {
                return <Redirect to='/news'/>;
            }

            const props: IPropsView = {
                readOneNews: this.oneNews || this.props.readOneNews,
                readOneNewsLoaded: !!this.oneNews || this.props.readOneNewsLoaded,
                userId: this.props.userId,
                readOneNewsFetchFail: this.props.readOneNewsFetchFail,
                readOneNewsErrorMessage: this.props.readOneNewsErrorMessage,
                onDeleteNews: this.onDeleteNews,
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        onDeleteNews = (postId: string) => () => {
            confirm('Брателло, ты уверен??') && this.props.deleteNews(postId);
        };

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return ReadOneNewsPageContainer(ReadOneNewsPageController);

};

export interface IPropsView {
    readonly onDeleteNews: (postId: string) => () => void;
    readonly readOneNews: IGetNews;
    readonly readOneNewsLoaded: boolean;
    readonly userId: string;
    readonly readOneNewsFetchFail: boolean;
    readonly readOneNewsErrorMessage: string;

}
