
const INITIAL_STATE={
    user:{},
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case "SIGN_IN":
          return { ...state,user:action.payload};
        default:
          return state;
      }
    }
    