import React from 'react';
import { Wrapper } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Seletor from '../../components/Seletor';
import Chart from '../../components/Charts';
// import { useDispatch, useSelector } from 'react-redux';


// interface IMain {
//     gain:number,
//     loss:number,
//     value:number,
// }

function Main(){

    // const [ getIn, setGetIn ] = useState(0);
    // const [ getOut, setGetOut ] = useState(0);
    // const [ average, setAverage ] = useState(0);
    // const [ select , setSelect ] = useState(0);
    // const month:any = useSelector<any>(state => state.auth.month)

    
    return(
        <Wrapper>
            <Card id="c1" color={'default'}>
                <Detail title="Entrada" value={2000.00} />
            </Card>
            <Card id="c2" color={'default'}>
                <Detail title="Saída" value={800.00} />
            </Card>
            <Card id="c3" color={'good'}>
                <Detail title="Saldo" value={1200.00} />
            </Card>
            <Card id="se">
                <Seletor />
            </Card>
            <Card id="ch">
                <Chart />
            </Card>
        </Wrapper>
    )
}

export default Main;