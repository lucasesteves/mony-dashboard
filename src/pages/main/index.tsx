import React from 'react';
import { Wrapper } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Seletor from '../../components/Seletor';
import Chart from '../../components/Charts';

const danger:string='#EF5837';
const good:string='#02CC9C';

function Main(){
    return(
        <Wrapper>
            <Card id="c1" color={'#5159AC'}>
                <Detail title="Entrada" value={2000.00} />
            </Card>
            <Card id="c2" color={'#5159AC'}>
                <Detail title="Saída" value={800.00} />
            </Card>
            <Card id="c3" color={good}>
                <Detail title="Saldo" value={1200.00} />
            </Card>
            <Card id="se">
                <Seletor/>
            </Card>
            <Card id="ch">
                <Chart />
            </Card>
        </Wrapper>
    )
}

export default Main;