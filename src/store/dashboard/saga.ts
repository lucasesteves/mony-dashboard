import { loadDashboardAction } from './actions';
import { takeLatest, put, all } from 'redux-saga/effects';

import dashboardService from '../../services/api/main';

import { loading, sendingData, saveAllGain, saveSumOfGain, saveNewGain, confirmDeleteGain,
      saveAllLoss, saveSumOfLoss, saveNewLoss, confirmDeleteLoss
} from './actions';
import { toast } from 'react-toastify';

export function* getDashboard({ payload }:ITypeSelect) {
  const { userId, month } : CreateMainDashboard = payload;

  const response = yield dashboardService.dashboard({userId,month});

  if (response.status === 200) {
        const { totalWin, totalLoss, diff } : ReturnDataMainDashboard = response.data;
        yield put(loading(false)); 
        yield put(sendingData({totalWin, totalLoss, diff}));
  } else {
        yield put(loading(false)); 
        toast.error(response.data.message)
  }
}

export function* getAllGain({ payload }:ITypeSelect) {
  const { userId, month } : CreateMainDashboard = payload;

  const response = yield dashboardService.listOfGain({userId,month});

  if (response.status === 200) {
        const data : ListElement[] = response.data;
        yield put(saveAllGain(data));
  } else {
        toast.error(response.data.message)
  }
}

export function* newGain({ payload }:ITypeSelect) {
  const { userId, name, value, month } : CreateMainDashboard = payload;

  console.log({ userId, name, value, month })
  const response = yield dashboardService.newGain({userId, name, value, month});

  if (response.status === 200) {
        const { _id, name, value } = response.data.gain
        yield put(saveNewGain({ _id, name, value }))
      //   toast.success(response.data.message)
  } else { 
        toast.error(response.data.message)
  }
}

export function* sumOfGain({ payload }:ITypeSelect) {
  const { userId, month } : CreateMainDashboard = payload;

  const response = yield dashboardService.sumOfGain({userId,month});

  if (response.status === 200) {
        const total : number = response.data.total; 
        yield put(saveSumOfGain(total));
  } else { 
        toast.error(response.data.message)
  }
}

export function* removeGain({ payload }:ITypeSelect) {
  const { _id } : GetIdOfData = payload;

  const response = yield dashboardService.removeGain(_id);

  if (response.status === 200) {
        yield put(confirmDeleteGain(_id));
      //   toast.success(response.data.message)
  } else {
        toast.error(response.data.message)
  }
}


export function* getAllLoss({ payload }:ITypeSelect) {
      const { userId, month } : CreateMainDashboard = payload;

      const response = yield dashboardService.listOfLoss({userId,month});

      if (response.status === 200) {
            const data : ListElement[] = response.data;
            yield put(saveAllLoss(data));
      } else {
            toast.error(response.data.message)
      }
}

export function* newLoss({ payload }:ITypeSelect) {
      const { userId, name, value, month } : CreateMainDashboard = payload;

      const response = yield dashboardService.newLoss({userId, name, value, month});

      if (response.status === 200) {
            const { _id, name, value } = response.data.loss
            yield put(saveNewLoss({ _id, name, value }))
            //   toast.success(response.data.message)
      } else { 
            toast.error(response.data.message)
      }
}

export function* sumOfLoss({ payload }:ITypeSelect) {
      const { userId, month } : CreateMainDashboard = payload;

      const response = yield dashboardService.sumOfLoss({userId,month});

      if (response.status === 200) {
            const total : number = response.data.total; 
            yield put(saveSumOfLoss(total));
      } else { 
            toast.error(response.data.message)
      }
}

export function* removeLoss({ payload }:ITypeSelect) {
      const { _id } : GetIdOfData = payload;

      const response = yield dashboardService.removeLoss(_id);

      if (response.status === 200) {
            yield put(confirmDeleteLoss(_id));
            //   toast.success(response.data.message)
      } else {
            toast.error(response.data.message)
      }
}

export default all([
  takeLatest(loadDashboardAction.setData, getDashboard),
  takeLatest(loadDashboardAction.newGain, newGain),
  takeLatest(loadDashboardAction.totalGain, sumOfGain),
  takeLatest(loadDashboardAction.allGain, getAllGain),
  takeLatest(loadDashboardAction.removeGain, removeGain),
  takeLatest(loadDashboardAction.newLoss, newLoss),
  takeLatest(loadDashboardAction.totalLoss, sumOfLoss),
  takeLatest(loadDashboardAction.allLoss, getAllLoss),
  takeLatest(loadDashboardAction.removeLoss, removeLoss),
]);
