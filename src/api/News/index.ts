import {Dispatch} from 'redux';

import {httpRequest} from 'src/utils';

//action creators
import * as actions from 'src/store/reducers/news/actions';
//data types
import {IPostNewsDataSend} from 'src/store/reducers/news/dataTypes';


/*************************************************************************
 * GET ALL NEWS
 *************************************************************************/
export const getNews = () => (dispatch: Dispatch) => {
    dispatch(actions.getNewsFetchRequest());


    httpRequest('feeds')
        .then((result) => {
            dispatch(actions.getNewsFetchSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.getNewsFetchFail(err));
        });

};

/*************************************************************************
 * GET ONE NEWS
 *************************************************************************/
export const getOneNews = (id: string) => (dispatch: Dispatch) => {
    dispatch(actions.readOneNewsFetchRequest());


    httpRequest(`feeds/${id}`)
        .then((result) => {
            dispatch(actions.readOneNewsFetchSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.readOneNewsFetchFail(err));
        });

};


/*************************************************************************
 * POST NEWS
 *************************************************************************/
export const postNews = (data: IPostNewsDataSend) => (dispatch: Dispatch) => {
    dispatch(actions.postNewsFetchRequest());


    httpRequest('feeds', 'POST', data)
        .then((result) => {
            dispatch(actions.postNewsFetchSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.postNewsFetchFail(err));
        });

};


/*************************************************************************
 * DELETE NEWS
 *************************************************************************/
export const deleteNews = (id: string) => (dispatch: Dispatch) => {
    dispatch(actions.deleteNewsFetchRequest());


    httpRequest(`feeds/${id}`, 'DELETE')
        .then((result) => {
            dispatch(actions.deleteNewsFetchSuccess(result.data));

            //после удаления новости необходимо обнулить переменную успешного удаления newsDeleted
            //иначе будет редиректить со страницы одной новости на страницу всех новостей
            //setTimeout - чтобы обнулило newsDeleted после того как она отработала
            setTimeout(() => dispatch(actions.clearNewsErrors()), 100);
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.deleteNewsFetchFail(err));
            setTimeout(() => dispatch(actions.clearNewsErrors()), 100);
        });

};


/*************************************************************************
 * UPDATE NEWS
 *************************************************************************/
export const updateNews = (id: string, data: IPostNewsDataSend) => (dispatch: Dispatch) => {
    dispatch(actions.updateNewsFetchRequest());


    httpRequest(`feeds/${id}`, 'PUT', data)
        .then((result) => {
            dispatch(actions.updateNewsFetchSuccess(result.data));
            setTimeout(() => dispatch(actions.clearNewsErrors()), 100);
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(actions.updateNewsFetchFail(err));
            setTimeout(() => dispatch(actions.clearNewsErrors()), 100);
        });

};

