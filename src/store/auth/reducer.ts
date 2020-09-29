
const INITIAL_STATE={
    user:{
        id:'',
        name:'',
        email:''
    },
    page:'',
    month:'',
    signed:false,
    loading:false,
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case "@AUTH/SIGN_IN":
            return { ...state,user:{
                id:action.payload._id,
                name:action.payload.name,
                email:action.payload.email
                }, signed:true
            };
        case "@AUTH/LOADING":
            return { ...state,loading:action.payload }
        case "SELECT_PAGE":
            return { ...state,page:action.payload.page };
        case "SELECT_MONTH":
            return { ...state,month:action.payload.month };
        case "@AUTH/LOGOUT_ACCOUNT":
            return {
                user:{
                    id:'',
                    name:'',
                    email:''
                },
                page:'',
                month:'',
                signed:false
             };
        default:
            return state;
      }
    }
    