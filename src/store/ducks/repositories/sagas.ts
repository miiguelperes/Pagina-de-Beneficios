import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, saveSelected } from './actions';

export function* load(filters: any) {
  try {

    let auth: any = localStorage.getItem('access_token');
    var cnpj = location.search.split('cnpj=')[1]
    
    cnpj = cnpj.replace(/\D/g, '')

    var url = 'api/marketplace/benefits' + (cnpj ? ('?cnpj='+cnpj) : ' ')
    const response = yield call(api.get,url , {
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": "Bearer "+auth }
    });
    yield put(loadSuccess(response.data.benefits, filters));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* _saveSelected(value: any) {
    yield put(saveSelected(value));
}

export function* login() {
  try {
    const response = yield call(api.post, 'oauth/access_token', { grant_type: "client_credentials" }, {
      headers: { 
        client_id: "446c8a0d-1bf7-486d-a6a7-e13cc2841bb3", 
        "Content-Type": "application/json", 
        "Authorization": "basic NDQ2YzhhMGQtMWJmNy00ODZkLWE2YTctZTEzY2MyODQxYmIzOmFjNDRkN2U5LTQ3MDQtNDgwNy05M2FjLTE4YTE3ZGZlMmIzOQ==" }
    });
    localStorage.setItem('access_token', response.data.access_token);
  } catch (err) {
    yield put(loadFailure());
  }
}
