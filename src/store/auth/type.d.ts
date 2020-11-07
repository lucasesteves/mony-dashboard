interface LoginConfig{
    email:string,
    password:string
}

interface RegisterConfig{
    name:string,
    email:string,
    password:string
}

interface UserCredential{
    id:string,
    name:string,
    email:string
}

interface UserState {
    user:UserCredential,
    token:string,
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

interface ICredential {
    user:UserCredential,
    token:string
}