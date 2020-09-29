interface IProfile{
    name?:string,
    email:string,
    password:string
}

export const authenticate=({ email, password }:IProfile)=>({
    type:"@AUTH/LOGIN",
    payload:{email,password }
});

export const registerAccount=({ name, email, password }:IProfile)=>({
    type:"@AUTH/REGISTER",
    payload:{name, email,password }
});

export const signIn=( user:object )=>({
    type:"@AUTH/SIGN_IN",
    payload:user
});

export const loading=(value:boolean)=>({
    type:"@AUTH/LOADING",
    payload:value
});

export const select=(page:string)=>({
    type:"SELECT_PAGE",
    payload:{page}
});

export const selectMonth=(month:string)=>({
    type:"SELECT_MONTH",
    payload:{month}
});

export const logoutAccount=()=>({
    type:"@AUTH/LOGOUT_ACCOUNT",
    payload: {}
});
    