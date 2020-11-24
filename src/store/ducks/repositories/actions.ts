import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (filters: any) => action(RepositoriesTypes.LOAD_REQUEST, filters);

export const loadSuccess = (data: Repository[], filters:any) => action(RepositoriesTypes.LOAD_SUCCCES, { data, filters });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const loadLogin = () => action(RepositoriesTypes.LOGIN);

export const saveSelected = (value: any) => action(RepositoriesTypes.SAVE_SELECTED, value);

export const searchData = (value: any) => action(RepositoriesTypes.SEARCH_DATA, value);

export const clearData = () => action(RepositoriesTypes.CLEAR_DATA);

