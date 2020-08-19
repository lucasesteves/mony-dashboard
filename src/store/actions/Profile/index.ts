interface IProfile{
    userId:number,
    name:string,
    email:string
}

export const signin=({userId,name,email}:IProfile)=>({
    type:"SIGN_IN",
    payload:{userId,name,email}
  });
    