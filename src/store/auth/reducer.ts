
const INITIAL_STATE={
    user:{
        id:'',
        name:'',
        email:''
    },
    page:'',
    month:'',
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case "SIGN_IN":
            return { ...state,user:{
                id:action.payload._id,
                name:action.payload.name,
                email:action.payload.email
                }
            };
        case "SELECT_PAGE":
            return { ...state,page:action.payload.page};
        case "SELECT_MONTH":
            return { ...state,month:action.payload.month};
        default:
            return state;
      }
    }
    