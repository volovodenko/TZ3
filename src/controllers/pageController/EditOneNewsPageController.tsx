import React, {Component, createRef, ReactNode, RefObject} from 'react';
import {Redirect} from 'react-router-dom';

//container
import EditOneNewsPageContainer,
{IEditOneNewsPageController} from 'src/containers/pageContainer/EditOneNewsPageContainer';
//data types
import {IGetNews} from 'src/store/reducers/news/dataTypes';

export default (View: (props: IPropsView) => ReactNode) => {

    class EditOneNewsPageController extends Component<IEditOneNewsPageController, IState> {

        readonly state = {
            title: '',
            content: ''
        };

        private readonly oneNews: IGetNews;
        private readonly newsId: string;
        private readonly titleRef = createRef<HTMLInputElement>();
        private readonly contentRef = createRef<HTMLTextAreaElement>();


        constructor(props: IEditOneNewsPageController) {
            super(props);

            this.newsId = this.props.match.params.newsId;

            if (this.props.newsLoaded) {
                this.oneNews = this.props.newsList
                    .find(item => item._id === this.newsId);
            }

            //если новости нет в списке newsList - не загружаем
            if (this.oneNews) {
                this.state = {
                    title: this.oneNews.title,
                    content: this.oneNews.content
                };
            } else {
                this.props.getOneNews(this.newsId);
            }

        }


        shouldComponentUpdate(nextProps: IEditOneNewsPageController) {
            if (nextProps.readOneNewsLoaded && !this.props.readOneNewsLoaded) {
                this.setState(() => ({
                    title: nextProps.readOneNews.title,
                    content: nextProps.readOneNews.content
                }));

                return false;
            }

            return true;
        }


        render() {

            if (this.props.newsIsUpdated) {
                return <Redirect to={`/news/${this.newsId}`}/>;
            }

            const props: IPropsView = {
                readOneNewsLoaded: !!this.oneNews || this.props.readOneNewsLoaded,
                readOneNewsFetchFail: this.props.readOneNewsFetchFail,
                readOneNewsErrorMessage: this.props.readOneNewsErrorMessage,

                titleRef: this.titleRef,
                contentRef: this.contentRef,
                title: this.state.title,
                content: this.state.content,
                onChangeTitle: this.onChangeTitle,
                onChangeContent: this.onChangeContent,
                newsId: this.newsId,
                onSaveNews: this.onSaveNews
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        onChangeTitle = () => {
            this.setState({
                title: this.titleRef.current.value
            });
        };


        onChangeContent = () => {
            this.setState({
                content: this.contentRef.current.value
            });
        };

        onSaveNews = () => {
            const data = {
                title: this.state.title,
                content: this.state.content
            };

            this.props.updateNews(this.newsId, data);
        };


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return EditOneNewsPageContainer(EditOneNewsPageController);

};

export interface IPropsView extends IState {
    readonly onChangeTitle: () => void;
    readonly onChangeContent: () => void;
    readonly onSaveNews: () => void;

    readonly readOneNewsLoaded: boolean;
    readonly readOneNewsFetchFail: boolean;
    readonly readOneNewsErrorMessage: string;

    readonly titleRef: RefObject<HTMLInputElement>;
    readonly contentRef: RefObject<HTMLTextAreaElement>;

    readonly newsId: string;
}

interface IState {
    readonly title: string;
    readonly content: string;
}
