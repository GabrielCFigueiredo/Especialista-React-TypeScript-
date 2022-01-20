import React from 'react';
import { Story , Meta } from '@storybook/react'

import ValueDescriptor, { ValueDescriptorProps } from '../app/components/ValueDescriptor/ValueDescriptor';


export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
 
} as Meta;


const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})

Default.args = {
    value: 560322.02,
    label: 'ganhos do mês',
    color: 'default'
}

export const Primary = Template.bind({})

Primary.args = {
    value: 560322.02,
    label: 'ganhos do mês',
    isCurrency: false,
    color: 'primary'
}

export const PrimaryCurrency = Template.bind({})

PrimaryCurrency.args = {
    value: 560322.02,
    label: 'ganhos do mês',
    isCurrency: true,
    color: 'primary'
}

export const DefaultCurrency = Template.bind({})

DefaultCurrency.args = {
    value: 560322.02,
    label: 'ganhos do mês',
    isCurrency: true,
    color: 'default'
}