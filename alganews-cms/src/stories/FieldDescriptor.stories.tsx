
import { Story , Meta } from '@storybook/react'

import FieldDescriptor, { FieldDescriptorProps } from '../app/components/FieldDescriptor/FieldDescriptor';


export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
 
} as Meta;


const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;


export const Descriptor = Template.bind({})

Descriptor.args = {
    label: 'data de nascimento',
    value: '2 de maio de 1985 (36 anos)'
}