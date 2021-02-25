import { loadDashboardAction } from './actions';

const INITIAL_STATE : DashboardState={
    dash:{
        totalWin:0,
        totalLoss:0,
        diff:0
    },
    gain:[],
    sumOfGain:0,
    loss:[],
    sumOfLoss:0,
    loading:false
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case 'persist/REHYDRATE':
            return INITIAL_STATE;
        case loadDashboardAction.sendingData:
            return { ...state,dash:{
                totalWin:action.payload.totalWin,
                totalLoss:action.payload.totalLoss,
                diff:action.payload.diff
                },
            };
        case loadDashboardAction.dashboardLoading:
            return { ...state, loading: action.payload }
        case loadDashboardAction.saveAllGain:
            return { ...state, gain: action.payload.data }
        case loadDashboardAction.saveNewGain:
                return { ...state, gain: state.gain.concat({_id:action.payload._id,name:action.payload.name,value:action.payload.value}) }
        case loadDashboardAction.saveSumOfGain:
                return { ...state, sumOfGain: action.payload.total }
        case loadDashboardAction.confirmRemoveGain:
            return { ...state, gain: state.gain.filter((e) => e._id !== action.payload._id) }  
        case loadDashboardAction.saveAllLoss:
            return { ...state, loss: action.payload.data }
        case loadDashboardAction.saveNewLoss:
                return { ...state, loss: state.loss.concat({_id:action.payload._id,name:action.payload.name,value:action.payload.value}) }
        case loadDashboardAction.saveSumOfLoss:
                return { ...state, sumOfLoss: action.payload.total }
        case loadDashboardAction.confirmRemoveLoss:
            return { ...state, loss: state.loss.filter((e) => e._id !== action.payload._id) }  
        default:
            return state;
      }
    }
    