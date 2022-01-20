import React from 'react';
import { Story , Meta } from '@storybook/react'

import Chart, { ChartProps } from '../app/components/Chart/Chart';

const data: Chart.ChartData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [120, 190, 300, 500, 200, 300],
      fill: true,
      backgroundColor: '#0099ff',
      borderColor: '#0099ff',
      yAxisID: 'cashflow',
    },
    {
      label: '# of No Votes',
      data: [1000, 270, 40, 550, 290, 758],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};



export default {
  title: 'Example/Chart',
  component: Chart,
 
} as Meta;


const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const ChartComponent = Template.bind({})

ChartComponent.args = {
  data,
  title: 'Média de performace nos últimos 12 meses'
}

export const WidthoutData= Template.bind({})

WidthoutData.args = {
  title: 'Média de performace nos últimos 12 meses'
}

