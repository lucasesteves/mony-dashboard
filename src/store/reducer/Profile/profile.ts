
const INITIAL_STATE={
    user:{},
    page:''
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case "SIGN_IN":
          return { ...state,user:action.payload};
        case "SELECT_PAGE":
            return { ...state,page:action.payload.page};
        default:
          return state;
      }
    }
    