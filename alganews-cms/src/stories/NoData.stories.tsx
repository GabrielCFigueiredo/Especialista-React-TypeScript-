import React from 'react';
import { Story , Meta } from '@storybook/react'

import NoData, { NoDataProps } from '../app/components/NoData/NoData';


export default {
  title: 'Example/NoData',
  component: NoData,
 
} as Meta;


const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const NoDataComponent = Template.bind({})

NoDataComponent.args = {
    height: 240
}

