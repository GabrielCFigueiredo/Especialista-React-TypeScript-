import React from 'react';
import { Story , Meta } from '@storybook/react'
import Paragraph, { ParagraphProps } from '../app/components/Typography/Paragraph';




export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
 
} as Meta;


const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})

Default.args = {
    size: 'default',
    children: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
}

export const Small = Template.bind({})

Small.args = {
    size: 'small',
    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,ning essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,ore recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
