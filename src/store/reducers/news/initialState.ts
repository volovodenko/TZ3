import {IGetNews} from './dataTypes';


const initialState: IStoreNews = {
    newsList: null,
    newsIsLoading: false,
    newsLoaded: false,
    newsFetchFail: false,
    getNewsListErrorMessage: null,

    readOneNews: null,
    readOneNewsIsLoading: false,
    readOneNewsLoaded: false,
    readOneNewsFetchFail: false,
    readOneNewsErrorMessage: null,

    newsIsPosting: false,
    newsPosted: false,
    newsPostFail: false,
    newsPostErrorMessage: null,

    newsIsDeleting: false,
    newsDeleted: false,
    newsDeleteFail: false,
    newsDeleteErrorMessage: null,

    newsIsUpdating: false,
    newsIsUpdated: false,
    newsUpdateFail: false,
    newsUpdateErrorMessage: null,
};

export default initialState;


export interface IStoreNews {
    readonly newsList: IGetNews[];
    readonly newsIsLoading: boolean;
    readonly newsLoaded: boolean;
    readonly newsFetchFail: boolean;
    readonly getNewsListErrorMessage: string;

    readonly readOneNews: IGetNews;
    readonly readOneNewsIsLoading: boolean;
    readonly readOneNewsLoaded: boolean;
    readonly readOneNewsFetchFail: boolean;
    readonly readOneNewsErrorMessage: string;

    readonly newsIsPosting: boolean;
    readonly newsPosted: boolean;
    readonly newsPostFail: boolean;
    readonly newsPostErrorMessage: string;

    readonly newsIsDeleting: boolean;
    readonly newsDeleted: boolean;
    readonly newsDeleteFail: boolean;
    readonly newsDeleteErrorMessage: string;

    readonly newsIsUpdating: boolean;
    readonly newsIsUpdated: boolean;
    readonly newsUpdateFail: boolean;
    readonly newsUpdateErrorMessage: string;
}
