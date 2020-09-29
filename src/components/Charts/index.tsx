import React, { useState, useEffect } from 'react'
import { Wrapper , Container, Message } from './styles';
import { ResponsivePie } from '@nivo/pie'
import Title from '../Title';
import Skeleton from 'react-loading-skeleton';

interface ChartData{
    data:{
        totalWin:number,
        totalLoss:number
    }
}


function Chart({ data }:ChartData){

    const [ formatData, setFormatData ] = useState<any>([])

    useEffect(()=>{
        const format = [
            {
              "id": "gasto",
              "label": "Gasto",
              "value": data.totalLoss,
              "color": "hsl(65, 70%, 50%)"
            },
            {
              "id": "Lucro",
              "label": "Lucro",
              "value": data.totalWin,
              "color": "hsl(276, 70%, 50%)"
            },
        ]
        setFormatData(format)
    },[data])


    return(
        <Wrapper>
            <Title>Análise Gráfica</Title>
            <Container>
                {!data.totalWin ?  <Message>Não há valores para serem representados graficamente</Message> :
                <ResponsivePie
                    data={formatData}
                    margin={{ top: 0, right: 0, bottom: 70, left: 0 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={16}
                    colors={['#5159AC','#02CC9C']}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#fff"
                    enableRadialLabels={false}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 56,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />}
            </Container>
        </Wrapper>
    )
}

export default Chart;