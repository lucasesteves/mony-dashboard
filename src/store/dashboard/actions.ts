
export enum loadDashboardAction {
    setData = "@DASHBOARD/SET_DATA",
    dashboardLoading = "@DASHBOARD/LOADING",
    sendingData = "@DASHBOARD/SENDING_DATA",
    newGain = "@DASHBOARD/NEW_GAIN",
    saveNewGain = "@DASHBOARD/SAVE_NEW_GAIN",
    allGain = "@DASHBOARD/ALL_GAIN",
    saveAllGain = "@DASHBOARD/SAVE_ALL_GAIN",
    totalGain = "@DASHBOARD/SUM_OF_GAIN",
    saveSumOfGain = "@DASHBOARD/SAVE_SUM_OF_GAIN",
    removeGain = "@DASHBOARD/REMOVE_GAIN",
    confirmRemoveGain = "@DASHBOARD/CONFIRM_REMOVE_GAIN",

    newLoss = "@DASHBOARD/NEW_LOSS",
    saveNewLoss = "@DASHBOARD/SAVE_NEW_LOSS",
    allLoss = "@DASHBOARD/ALL_LOSS",
    saveAllLoss = "@DASHBOARD/SAVE_ALL_LOSS",
    totalLoss = "@DASHBOARD/SUM_OF_LOSS",
    saveSumOfLoss = "@DASHBOARD/SAVE_SUM_OF_LOSS",
    removeLoss = "@DASHBOARD/REMOVE_LOSS",
    confirmRemoveLoss = "@DASHBOARD/CONFIRM_REMOVE_LOSS"
  }

interface Dashboard{
    userId:string,
    month:string
}

interface MainData{
    totalWin:number,
    totalLoss:number,
    diff:number,
}

interface ElementsData{
    userId:string,
    name?:string,
    value?:string,
    month:string
}

interface SaveData{
    _id:string,
    name:string,
    value:string
}

export const setData=({ userId, month }:Dashboard):ITypeSelect=>({
    type:loadDashboardAction.setData,
    payload:{ userId, month }
});

export const loading=(value:boolean):ITypeSelect=>({
    type:loadDashboardAction.dashboardLoading,
    payload:value
});

export const sendingData=({totalWin, totalLoss, diff}:MainData):ITypeSelect=>({
    type:loadDashboardAction.sendingData,
    payload:{ totalWin, totalLoss, diff }
});


export const newGain=({ userId, name, value, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.newGain,
    payload:{ userId, name, value, month }
});

export const saveNewGain=({ _id, name, value } : SaveData):ITypeSelect=>({
    type:loadDashboardAction.saveNewGain,
    payload:{ _id, name, value }
});

export const allGain=({ userId, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.allGain,
    payload:{ userId, month }
});

export const saveAllGain=( data : Array<ListElement>):ITypeSelect=>({
    type:loadDashboardAction.saveAllGain,
    payload:{ data }
});

export const totalGain=({ userId, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.totalGain,
    payload:{ userId, month }
});

export const saveSumOfGain=(total : number):ITypeSelect=>({
    type:loadDashboardAction.saveSumOfGain,
    payload:{ total }
});

export const deleteGain=(_id:string):ITypeSelect=>({
    type:loadDashboardAction.removeGain,
    payload:{ _id }
});

export const confirmDeleteGain=(_id:string):ITypeSelect=>({
    type:loadDashboardAction.confirmRemoveGain,
    payload:{ _id }
});

export const newLoss=({ userId, name, value, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.newLoss,
    payload:{ userId, name, value, month }
});

export const saveNewLoss=({ _id, name, value } : SaveData):ITypeSelect=>({
    type:loadDashboardAction.saveNewLoss,
    payload:{ _id, name, value }
});

export const allLoss=({ userId, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.allLoss,
    payload:{ userId, month }
});

export const saveAllLoss=( data : Array<ListElement>):ITypeSelect=>({
    type:loadDashboardAction.saveAllLoss,
    payload:{ data }
});

export const totalLoss=({ userId, month } : ElementsData):ITypeSelect=>({
    type:loadDashboardAction.totalLoss,
    payload:{ userId, month }
});

export const saveSumOfLoss=(total : number):ITypeSelect=>({
    type:loadDashboardAction.saveSumOfLoss,
    payload:{ total }
});

export const deleteLoss=(_id:string):ITypeSelect=>({
    type:loadDashboardAction.removeLoss,
    payload:{ _id }
});

export const confirmDeleteLoss=(_id:string):ITypeSelect=>({
    type:loadDashboardAction.confirmRemoveLoss,
    payload:{ _id }
});







