import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { transparentize } from 'polished';
import Heading from '../Typography/Heading';
import NoData from '../NoData/NoData';
//import Chart from 'chart.js';



const options: Chart.ChartOptions = {
  maintainAspectRatio: true,  
  elements: {
    line: {
        tension: 0,
    }
  },
  legend: {
    position: 'bottom',
    align: 'center',
    display: true,
    labels: {
        
        usePointStyle: true
    }
  },
  
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      },
    ],
  },
};

export interface ChartProps {
 data: Chart.ChartData
 title: string,
}

export default function Chart ({ data, title } : ChartProps) {
    return (
        <ChartWrapper style={{ width: '100%'}}>
          <div style={{marginBottom: '16px'}}>
            <Heading level={3}>
                {title}
            </Heading>
          </div>

          {
            data
            
            ?
            <Line
            type='line'
            height={139}
            data={data}
            width={600}
            options={options}
            />

            :

            <NoData height={139}/>
          }
        </ChartWrapper>
    )
}

const ChartWrapper = styled.div `
  text-align: center;
  border: 1px solid ${transparentize(.9, '#274060')};
  padding: 10px;
  width: 700px;
  
`