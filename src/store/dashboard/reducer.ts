
const INITIAL_STATE={
    dash:{
        totalWin:0,
        totalLoss:0,
        diff:0
    },
    loading:false
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case "@DASHBOARD/SENDING_DATA":
            return { ...state,dash:{
                totalWin:action.payload.totalWin,
                totalLoss:action.payload.totalLoss,
                diff:action.payload.diff
                },
            };
        case "@DASHBOARD/LOADING":
            return { ...state, loading: action.payload }
        default:
            return state;
      }
    }
    