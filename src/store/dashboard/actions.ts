interface Dashboard{
    userId:string,
    month:string
}

interface MainData{
    totalWin:number,
    totalLoss:number,
    diff:number,
}

export const setData=({ userId, month }:Dashboard)=>({
    type:"@DASHBOARD/SET_DATA",
    payload:{ userId, month }
});

export const loading=(value:boolean)=>({
    type:"@DASHBOARD/LOADING",
    payload:value
});

export const sendingData=({totalWin, totalLoss, diff}:MainData)=>({
    type:"@DASHBOARD/SENDING_DATA",
    payload:{ totalWin, totalLoss, diff }
});
