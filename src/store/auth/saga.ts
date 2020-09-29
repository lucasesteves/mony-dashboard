import { takeLatest, put, all } from 'redux-saga/effects';

import { AuthenticationService } from '../../services/api/authentication';
import { loginAuth } from '../../services/auth';

import { signIn, loading } from './actions';
import { toast } from 'react-toastify';

export function* login({ payload }:any) {
    yield put(loading(true));
  const { email, password } = payload;

  const authenticationService = new AuthenticationService();

  const response = yield authenticationService.login({email,password});
 
  console.log(response)

  if (response.status === 200) {
        const { token, user } = response.data;
        loginAuth(token)
        yield put(signIn(user));
  } else {
        yield put(loading(false)); 
        toast.error(response.data.message)
  }
}

export function* register({ payload }:any) {

    const { name, email, password } = payload;
  
    const authenticationService = new AuthenticationService();
  
    const response = yield authenticationService.register({name, email, password});
   
    console.log(response)
  
    if (response.status === 200) {
        const { token, user } = response.data;
        loginAuth(token)
        yield put(signIn(user));
    } else {
        yield put(loading(false));
        toast.error(response.data.message)
    }
  }

export default all([
  takeLatest('@AUTH/LOGIN', login),
  takeLatest('@AUTH/REGISTER', register),
]);
