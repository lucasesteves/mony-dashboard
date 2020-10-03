import { loadConfigAction } from './actions';


const INITIAL_STATE : InitalState = {
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
        case loadConfigAction.authenticate:
            return { ...state,user:{
                id:action.payload._id,
                name:action.payload.name,
                email:action.payload.email
                }, signed:true
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
                page:'',
                month:'',
                signed:false
             };
        default:
            return state;
      }
    }
    