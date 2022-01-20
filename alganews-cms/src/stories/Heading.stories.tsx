import React from 'react';
import { Story , Meta } from '@storybook/react'
import Heading, { HeadingProps } from '../app/components/Typography/Heading';




export default {
  title: 'Typography/Heading',
  component: Heading,
 
} as Meta;


const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const StyledHeading1 = Template.bind({})

StyledHeading1.args = {
    level: 1,
    children: 'TITLE 1'
}

export const StyledHeading2 = Template.bind({})

StyledHeading2.args = {
    level: 2,
    children: 'TITLE 2'
}

export const StyledHeading3 = Template.bind({})

StyledHeading3.args = {
    level: 3,
    children: 'TITLE 3'
}



