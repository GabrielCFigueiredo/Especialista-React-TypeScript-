import React from 'react';
import { Story , Meta } from '@storybook/react'

import SessionController, { SessionControllerProps } from '../app/components/SessionController/SessionController';


export default {
  title: 'Example/SessionController',
  component: SessionController,
 
} as Meta;


const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const SessionControllerComponent = Template.bind({})

SessionControllerComponent.args = {
    name: 'Gabriel Figueiredo',
    description: 'Desenvolvedor React ha 1 ano!!!!',
}