import { loadConfigAction } from './actions';
import { takeLatest, put, all } from 'redux-saga/effects';

import authenticationService from '../../services/api/authentication';
import { loginAuth } from '../../services/auth';
import { setToken } from '../../services/api/api';

import { signIn, loading } from './actions';
import { toast } from 'react-toastify';

export function* login({ payload }:ITypeSelect) {
  console.log('entra no saga?')
  yield put(loading(true));
  const { email, password } : LoginConfig = payload;
  console.log(email,password)
  const response:any = yield authenticationService.login({email,password});
 
  if (response.status === 200) {
        console.log('tudo certo?')
        const { token, user } : ICredential = response.data;
        setToken(token)
        loginAuth(token)
        console.log(user);
        yield put(signIn({user,token}));
  } else {
        yield put(loading(false)); 
        toast.error(response.data.message)
  }
}

export function* register({ payload }:ITypeSelect) {

    const { name, email, password } : RegisterConfig = payload;
  
    const response = yield authenticationService.register({name, email, password});
     
    if (response.status === 200) {
        const { token, user } : ICredential = response.data;
        setToken(token)
        loginAuth(token)
        yield put(signIn({user,token}));
    } else {
        yield put(loading(false));
        toast.error(response.data.message)
    }
  }

export default all([
  takeLatest(loadConfigAction.login, login),
  takeLatest(loadConfigAction.register, register),
]);
