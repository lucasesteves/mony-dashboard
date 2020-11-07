export enum loadConfigAction {
    login = "@AUTH/LOGIN",
    register = "@AUTH/REGISTER",
    authenticate = "@AUTH/SIGN_IN",
    loading = "@AUTH/LOADING",
    select = "@AUTH/SELECT_PAGE",
    selectMonth = "@AUTH/SELECT_MONTH",
    logout = "@AUTH/LOGOUT_ACCOUNT",
  }

export const authenticate=({ email, password }:IProfile):ITypeSelect=>({
    type:loadConfigAction.login,
    payload:{email,password }
});

export const registerAccount=({ name, email, password }:IProfile):ITypeSelect=>({
    type:loadConfigAction.register,
    payload:{name, email,password }
});

export const signIn=( {user, token }:ICredential )=>({
    type:loadConfigAction.authenticate,
    payload:{user,token}
});

export const loading=(value:boolean)=>({
    type:loadConfigAction.loading,
    payload:value
});

export const select=(page:string):ITypeSelect=>({
    type:loadConfigAction.select,
    payload:{page}
});

export const selectMonth=(month:string):ITypeSelect=>({
    type:loadConfigAction.selectMonth,
    payload:{month}
});

export const logoutAccount=():ITypeSelect=>({
    type:loadConfigAction.logout,
    payload: {}
});

    