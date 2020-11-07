import { loadConfigAction } from './actions';


const INITIAL_STATE : UserState = {
    user:{
        id:'',
        name:'',
        email:''
    },
    token:'',
    page:'',
    month:'',
    signed:false,
    loading:false,
  }
  
  export default function data(state = INITIAL_STATE, action:any) {
      switch (action.type) {
        case loadConfigAction.authenticate:
            return { ...state,
                user:action.payload.user,
                token:action.payload.token, 
                signed:true
            };
        case loadConfigAction.loading:
            return { ...state,loading:action.payload }
        case loadConfigAction.select:
            return { ...state,page:action.payload.page };
        case loadConfigAction.selectMonth:
            return { ...state,month:action.payload.month };
        case loadConfigAction.logout:
            return {
                user:{
                    id:'',
                    name:'',
                    email:''
                },
                token:'',
                page:'',
                month:'',
                signed:false
             };
        default:
            return state;
      }
    }
    