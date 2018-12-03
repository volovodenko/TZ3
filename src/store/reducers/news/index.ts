import initialState, {IStoreNews} from './initialState';
import {actionTypes} from '../actionTypes';
import {Action} from './acTypes';


export const news = (stateStore: IStoreNews = initialState, action: Action): IStoreNews => {

    switch (action.type) {

        /*************************************************************************
         * GET ALL NEWS
         *************************************************************************/
        case actionTypes.GET_NEWS_FETCH_REQUEST:
            return {
                ...stateStore,
                newsIsLoading: true,
                newsLoaded: false,
                newsList: null,
            };


        case actionTypes.GET_NEWS_FETCH_SUCCESS: {

            if (action.payload.success) {
                return {
                    ...stateStore,
                    newsList: action.payload.feeds,
                    newsIsLoading: false,
                    newsLoaded: true
                };
            }

            return {
                ...stateStore,
                getNewsListErrorMessage: action.payload.message,
                newsIsLoading: false,
                newsFetchFail: true
            };
        }



        case actionTypes.GET_NEWS_FETCH_FAIL:
            return {
                ...stateStore,
                newsIsLoading: false,
                newsFetchFail: true
            };


        /*************************************************************************
         * GET ONE NEWS
         *************************************************************************/
        case actionTypes.GET_READ_ONE_NEWS_FETCH_REQUEST:
            return {
                ...stateStore,
                readOneNewsIsLoading: true,
                readOneNewsErrorMessage: null,
                readOneNewsFetchFail: false,
                readOneNews: null,
                readOneNewsLoaded: false,
            };


        case actionTypes.GET_READ_ONE_NEWS_FETCH_SUCCESS: {

            if (action.payload.success) {
                return {
                    ...stateStore,
                    readOneNews: action.payload.feed,
                    readOneNewsLoaded: true,
                    readOneNewsIsLoading: false
                };
            }

            return {
                ...stateStore,
                readOneNewsErrorMessage: action.payload.message,
                readOneNewsIsLoading: false,
                readOneNewsFetchFail: true
            };
        }


        case actionTypes.GET_READ_ONE_NEWS_FETCH_FAIL:
            return {
                ...stateStore,
                readOneNewsIsLoading: false,
                readOneNewsFetchFail: true
            };

        /*************************************************************************
         * POST NEWS
         *************************************************************************/
        case actionTypes.POST_NEWS_FETCH_REQUEST:
            return {
                ...stateStore,
                newsIsPosting: true
            };


        case actionTypes.POST_NEWS_FETCH_SUCCESS: {

            if (action.payload.success) {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const userId = JSON.parse(localStorage.getItem('userId'));

                const creator = {
                    _id: userId,
                    displayName: userInfo.name,
                    picture: userInfo.picture
                };

                const postNews = {...action.payload.feed, creator};

                return {
                    ...stateStore,
                    newsList: [...stateStore.newsList, postNews],
                    newsIsPosting: false,
                    newsPosted: true
                };
            }

            return {
                ...stateStore,
                newsPostErrorMessage: action.payload.message,
                newsIsPosting: false,
                newsPostFail: true
            };

        }

        case actionTypes.POST_NEWS_FETCH_FAIL:
            return {
                ...stateStore,
                newsIsPosting: false,
                newsPostFail: true
            };


        /*************************************************************************
         * DELETE NEWS
         *************************************************************************/
        case actionTypes.DELETE_NEWS_FETCH_REQUEST:
            return {
                ...stateStore,
                newsIsDeleting: true
            };


        case actionTypes.DELETE_NEWS_FETCH_SUCCESS: {

            if (action.payload.success) {

                //если список новостей загружен
                if (stateStore.newsList) {
                    const newsList = stateStore.newsList
                        .filter(item => item._id !== action.payload._id);

                    return {
                        ...stateStore,
                        newsList: [...newsList],
                        newsIsDeleting: false,
                        newsDeleted: true
                    };
                }

                return {
                    ...stateStore,
                    newsIsDeleting: false,
                    newsDeleted: true
                };

            }

            return {
                ...stateStore,
                newsDeleteErrorMessage: action.payload.message,
                newsIsDeleting: false,
                newsDeleteFail: true
            };

        }

        case actionTypes.DELETE_NEWS_FETCH_FAIL:
            return {
                ...stateStore,
                newsIsDeleting: false,
            };


        /*************************************************************************
         * UPDATE NEWS
         *************************************************************************/
        case actionTypes.UPDATE_NEWS_FETCH_REQUEST:
            return {
                ...stateStore,
                newsIsUpdating: true
            };


        case actionTypes.UPDATE_NEWS_FETCH_SUCCESS: {

            if (action.payload.success) {

                //если список новостей загружен, то обновляем его
                if (stateStore.newsList) {
                    const newsList = stateStore.newsList
                        .filter(item => item._id !== action.payload.feed._id);

                    return {
                        ...stateStore,
                        newsList: [...newsList, action.payload.feed],
                        newsIsUpdating: false,
                        newsIsUpdated: true
                    };
                }

                return {
                    ...stateStore,
                    newsIsUpdating: false,
                    newsIsUpdated: true
                };

            }



            return {
                ...stateStore,
                newsUpdateErrorMessage: action.payload.message,
                newsIsUpdating: false,
                newsUpdateFail: true
            };

        }

        case actionTypes.UPDATE_NEWS_FETCH_FAIL:
            return {
                ...stateStore,
                newsUpdateFail: false,
            };



        /*************************************************************************
         * CLEAR FETCH NEWS ERRORS
         *************************************************************************/
        case actionTypes.CLEAR_NEWS_ERROR: {
            return {
                ...stateStore,
                newsDeleteFail: false,
                newsFetchFail: false,
                newsPostFail: false,
                newsDeleted: false,
                readOneNewsFetchFail: false,
                newsUpdateFail: false,
                newsIsUpdated: false,
                newsDeleteErrorMessage: null,
                getNewsListErrorMessage: null,
                newsPostErrorMessage: null,
                readOneNewsErrorMessage: null,
                newsUpdateErrorMessage: null,

            };
        }

        /*************************************************************************
         * DEFAULT
         *************************************************************************/
        default:
            return stateStore;
    }

};
