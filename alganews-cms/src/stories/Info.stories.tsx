import React from 'react';
import { Story , Meta } from '@storybook/react'

import Info, { InfoProps } from '../app/components/Info/Info';


export default {
  title: 'Example/Info',
  component: Info,
 
} as Meta;


const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const InfoComponent = Template.bind({})

InfoComponent.args = {
    title: 'POST NÃO ENCONTRADO',
    description: 'Este post não foi encontrado. Você sendo direcionado para a lista de post!'
}