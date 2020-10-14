interface LoginConfig{
    email:string,
    password:string
}

interface RegisterConfig{
    name:string,
    email:string,
    password:string
}

interface ReturnDataLogin{
    token:string,
    user:object
}

interface UserState {
    user:{
        id:string,
        name:string,
        email:string
    },
    page:string,
    month:string,
    signed:boolean,
    loading:boolean,
}

interface ITypeSelect{
    type:string,
    payload:any
}

interface IProfile{
    name?:string,
    email:string,
    password:string
}