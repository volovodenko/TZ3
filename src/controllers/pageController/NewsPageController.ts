import {createRef, Component, ReactNode, RefObject} from 'react';

//container
import NewsPageContainer,
{INewsPageController} from 'src/containers/pageContainer/NewsPageContainer';
//data types
import {IGetNews} from 'src/store/reducers/news/dataTypes';

export default (View: (props: IPropsView) => ReactNode) => {

    class NewsPageController extends Component<INewsPageController, IState> {

        readonly state = {
            postNewsVisible: false
        };
        private readonly postTitleRef = createRef<HTMLInputElement>();
        private readonly postContentRef = createRef<HTMLTextAreaElement>();


        constructor(props: INewsPageController) {
            super(props);

            this.props.newsLoaded || this.props.getNews();
        }

        componentDidUpdate() {
            if (this.props.newsDeleteFail && this.props.newsDeleteErrorMessage) {
                this.props.onSaveErrorMessage(`Слюшай, дарагой, не могу удалить, тут сервак какую то маляву прислал:
                    "${this.props.newsDeleteErrorMessage}"`);
            }
        }


        render() {
            const props: IPropsView = {
                postNewsVisibleToggle: this.postNewsVisibleToggle,
                postNewsVisible: this.state.postNewsVisible,
                newsList: this.getNewsList(),
                newsLoaded: this.props.newsLoaded,
                onPostNews: this.onPostNews,
                postTitleRef: this.postTitleRef,
                postContentRef: this.postContentRef,
                onDeleteNews: this.onDeleteNews,
                userId: this.props.userId
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        getNewsList() {
            if (!this.props.newsList) {
                return this.props.newsList;
            }

            return this.props.newsList.sort((a: IGetNews, b: IGetNews) => {
                const dateA = +new Date(a.createdAt);
                const dateB = +new Date(b.createdAt);

                return dateB - dateA;
            });

        }


        postNewsVisibleToggle = () => {
            this.setState((state: IState) => ({
                postNewsVisible: !state.postNewsVisible
            }));
        };


        onPostNews = () => {
            if (!this.props.userLoggedIn) {
                this.props.onSaveErrorMessage('Ээээ...алле гараж....чтобы загнать маляву сначала авторизируйся');
                return;
            }

            const title = this.postTitleRef.current.value;
            const content = this.postContentRef.current.value;

            if (!title.length) {
                this.props.onSaveErrorMessage('Ээээ...алле гараж....а четкий заголовок где пропил?');
                return;
            }

            if (!content.length) {
                this.props.onSaveErrorMessage('Ээээ...алле гараж....а че, на районе ничего не происходит?');
                return;
            }

            this.props.postNews({
                title,
                content
            });

            this.postTitleRef.current.value = '';
            this.postContentRef.current.value = '';
        };


        onDeleteNews = (postId: string) => () => {
            confirm('Брателло, ты уверен??') && this.props.deleteNews(postId);
        };


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return NewsPageContainer(NewsPageController);

};

export interface IPropsView extends IState {
    readonly postNewsVisibleToggle: () => void;
    readonly onPostNews: () => void;
    readonly onDeleteNews: (postId: string) => () => void;

    readonly postTitleRef: RefObject<HTMLInputElement>;
    readonly postContentRef: RefObject<HTMLTextAreaElement>;

    readonly newsList: IGetNews[];
    readonly newsLoaded: boolean;

    readonly userId: string;
}

interface IState {
    readonly postNewsVisible: boolean;
}
