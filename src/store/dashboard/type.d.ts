
interface ListElement{
    _id:string
    name:string,
    value:string
}

interface DashboardState {
    dash:{
        totalWin:number,
        totalLoss:number,
        diff:number
    },
    gain:Array<ListElement>,
    sumOfGain:number,
    loss:Array<ListElement>,
    sumOfLoss:number,
    loading:boolean
}

interface CreateMainDashboard{
    userId:string,
    name?:string,
    value?:string,
    month:string
}

interface GetIdOfData {
    _id:string
}

interface ReturnDataMainDashboard{
    totalWin:number,
    totalLoss:number,
    diff:number
}

interface IUser{
    id:string,
    name:string,
    email:string
}
