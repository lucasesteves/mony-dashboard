import React from 'react';
import { Wrapper } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/detail';

function Main(){
    return(
        <Wrapper>
            <Card color={'#5159AC'} id="c1">
                <Detail title="Entrada" value={2000.00} />
            </Card>
            <Card color={'#5159AC'} id="c2">
                <Detail title="Saída" value={800.00} />
            </Card>
            <Card id="c3">
                <Detail title="Saldo" value={1200.00} />
            </Card>
            <Card id="se">
                <Detail title="Seletor" value={1200.00} />
            </Card>
            <Card id="ch">
                <Detail title="Gráfico" value={1200.00} />
            </Card>
        </Wrapper>
    )
}

export default Main;