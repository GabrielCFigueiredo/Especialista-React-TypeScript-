import React from 'react';
import { Story , Meta } from '@storybook/react'

import ErrorDisplay, { ErrorDisplayProps } from '../app/components/ErrorDisplay/ErrorDisplay';



export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
 
} as Meta;


const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const ErrorDisplayComponent = Template.bind({})

ErrorDisplayComponent.args = {
  small: false,
  title: 'Erro ao renderizar componente',
  message: 'Erro desconhecido'

}

export const CustomTitle = Template.bind({})

CustomTitle.args = {
    small: true,
    title: 'Houve um erro',
    message: 'Erro desconhecido'
  
  }

  export const CustomMessage = Template.bind({})

  CustomMessage.args = {
    small: true,
    title: 'Erro ao renderizar componente',
    message: 'Erro desconhecido'
  
  }

  export const Small = Template.bind({})

  Small.args = {
    small: true,
    title: 'Erro ao renderizar componente',
    message: 'Erro desconhecido'
  
  }