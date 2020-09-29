import { takeLatest, put, all } from 'redux-saga/effects';

import { DashboardService } from '../../services/api/main';

import { loading, sendingData } from './actions';
import { toast } from 'react-toastify';

export function* getDashboard({ payload }:any) {
    yield put(loading(true));
  const { userId, month } = payload;

  const dashboardService = new DashboardService();

  const response = yield dashboardService.dashboard({userId,month});

  console.log('dados bruto')
  console.log(response)

  if (response.status === 200) {
        const { totalWin, totalLoss, diff } = response.data;
        yield put(loading(false)); 
        yield put(sendingData({totalWin, totalLoss, diff}));
  } else {
        yield put(loading(false)); 
        toast.error(response.data.message)
  }
}


export default all([
  takeLatest('@DASHBOARD/SET_DATA', getDashboard),
]);
