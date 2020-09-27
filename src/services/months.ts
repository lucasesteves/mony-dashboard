import moment from 'moment';

const list = [
    {id:1, name:'Janeiro', value:'janeiro'},
    {id:2, name:'Fevereiro', value:'fevereiro'},
    {id:3, name:'Março', value:'março'},
    {id:4, name:'Abril', value:'abril'},
    {id:5, name:'Maio', value:'maio'},
    {id:6, name:'Junho', value:'junho'},
    {id:7, name:'Julho', value:'julho'},
    {id:8, name:'Agosto', value:'agosto'},
    {id:9, name:'Setembro', value:'setembro'},
    {id:10, name:'Outubro', value:'outubro'},
    {id:11, name:'Novembro', value:'novembro'},
    {id:12, name:'Dezembro', value:'dezembro'}
]

export const getMonths = () => {
    return list;
}

export const findMonth = (number:string) =>{
    const result = list.filter(e => e.id === parseInt(number));
    return result[0].name;
}

export const currentMonth = () =>{
    const month = moment().format('MM')
    const nameMonth = findMonth(month)
    return nameMonth;
}