import React from 'react';
import { Story , Meta } from '@storybook/react'

import Profile, { ProfileProps } from '../app/components/Profile/Profile';


export default {
  title: 'Example/Profile',
  component: Profile,
 
} as Meta;


const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const ProfileComponent = Template.bind({})

ProfileComponent.args = {
    name: 'Gabriel Figueiredo',
    description: 'Sou desenvolvedor!!!!'

}