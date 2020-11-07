import {instance} from './api';
import moment from 'moment';

interface MainData{
    userId:string,
    name?:string,
    value?:string,
    month:string
}

class DashboardService{

    private year:string = moment().format('YYYY')

    async dashboard({ userId, month }:MainData):Promise<object>{
        try{
            const data = { userId, month, year:this.year }
            const result = await instance.post('/dashboard',data)
            return result;
        }catch(err){
            return err.message
        } 
    }

    async listOfGain({ userId, month }:MainData){
        try{
            const data = { userId, month, year:this.year }
            const result = await instance.post<Promise<object>>('/gain',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async newGain({ userId, name, value, month } : MainData){
        try{
            const data = { userId, name, value, month, year:this.year }
            const result = await instance.post<Promise<object>>('/gain/save',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async sumOfGain({ userId, month } : MainData){
        try{
            const data = { userId, month, year:this.year }
            const result = await instance.post<Promise<object>>('/gain/total',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async removeGain( _id : string){
        try{
            const result = await instance.delete<Promise<object>>(`/gain/remove/${_id}`)
            return result;
        }catch(err){
            return err.message
        }
    }

    async listOfLoss({ userId, month }:MainData){
        try{
            const data = { userId, month, year:this.year }
            const result = await instance.post<Promise<object>>('/loss',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async newLoss({ userId, name, value, month } : MainData){
        try{
            const data = { userId, name, value, month, year:this.year }
            const result = await instance.post<Promise<object>>('/loss/save',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async sumOfLoss({ userId, month } : MainData){
        try{
            const data = { userId, month, year:this.year }
            const result = await instance.post<Promise<object>>('/loss/total',data)
            return result;
        }catch(err){
            return err.message
        }
    }

    async removeLoss( _id : string){
        try{
            const result = await instance.delete<Promise<object>>(`/loss/remove/${_id}`)
            return result;
        }catch(err){
            return err.message
        }
    }
}

export default new DashboardService();