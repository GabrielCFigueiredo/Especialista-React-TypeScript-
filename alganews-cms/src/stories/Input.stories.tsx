import React from 'react';
import { Story , Meta } from '@storybook/react'

import Input, { InputProps } from '../app/components/Input/Input';


export default {
  title: 'Example/Input',
  component: Input,
 
} as Meta;


const Template: Story<InputProps> = (args) => <Input {...args} />;


export const WithPlaceholder = Template.bind({})

WithPlaceholder.args = {
 placeholder: 'NAME'
}

export const WithLabelAndPlaceholder = Template.bind({})

WithLabelAndPlaceholder.args = {
label: 'NAME',
 placeholder: 'NAME'
}

export const WithLabelAndContent = Template.bind({})

WithLabelAndContent.args = {
label: 'NAME',
 
 value: 'name'
}

export const WithContent = Template.bind({})

WithContent.args = {
 value: 'name'
}