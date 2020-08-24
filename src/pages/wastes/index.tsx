import React from 'react';
import { Main } from './styles';
import Card from '../../components/Card';

function Wastes(){
    return(
        <Main>
            <Card id="c1">
                add waste
            </Card>
            <Card id="c2">
                total
            </Card>
            <Card id="li">
                list
            </Card>
        </Main>
    )
}

export default Wastes;