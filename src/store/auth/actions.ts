interface IProfile{
    name?:string,
    email:string,
    password:string
}

export const authenticate=({ email,password }:IProfile)=>({
    type:"AUTH",
    payload:{email,password }
});

export const signIn=( user:object )=>({
    type:"SIGN_IN",
    payload:user
});

export const select=(page:string)=>({
    type:"SELECT_PAGE",
    payload:{page}
});

export const selectMonth=(month:string)=>({
    type:"SELECT_MONTH",
    payload:{month}
});
    