import React from 'react';
import { Story , Meta } from '@storybook/react'

import Comfirn, { ComfirnProps } from '../app/components/Comfirn/Comfirn';


export default {
  title: 'Example/Comfirn',
  component: Comfirn,
 
} as Meta;


const Template: Story<ComfirnProps> = (args) => <Comfirn {...args} />;

export const ComfirnComponent = Template.bind({})

ComfirnComponent.args = {
    title: 'Deseja realmente sair?'

}

