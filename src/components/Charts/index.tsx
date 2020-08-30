import React from 'react'
import { Wrapper , Container} from './styles';
import { ResponsivePie } from '@nivo/pie'
import Title from '../Title';

const data=[
    {
      "id": "gasto",
      "label": "Gasto",
      "value": 355,
      "color": "hsl(65, 70%, 50%)"
    },
    {
      "id": "Lucro",
      "label": "Lucro",
      "value": 343,
      "color": "hsl(276, 70%, 50%)"
    },
  ]

function Chart(){
    return(
        <Wrapper>
            <Title>Análise Gráfica</Title>
            <Container>
                <ResponsivePie
                    data={data}
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
                />
            </Container>
        </Wrapper>
    )
}

export default Chart;