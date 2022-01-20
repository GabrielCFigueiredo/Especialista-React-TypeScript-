import React from 'react';
import { Story , Meta } from '@storybook/react'

import ImageUpload, { ImageUploadProps } from '../app/components/ImageUpload/ImageUpload';


export default {
  title: 'Example/ImageUpload',
  component: ImageUpload,
 
} as Meta;


const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const ImageUploadComponent = Template.bind({})

ImageUploadComponent.args = {
    label: 'Thumbnail do post'

}