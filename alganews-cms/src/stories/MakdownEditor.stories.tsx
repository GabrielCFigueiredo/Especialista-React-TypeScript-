import React from 'react';
import { Story , Meta } from '@storybook/react'

import MarkdownEditor, { MarkdownEditorProps } from '../app/components/MarkdownEditor/MarkdownEditor';


export default {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
 
} as Meta;


const Template: Story<MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />;

export const MarkdownEditorComponent = Template.bind({})

MarkdownEditorComponent.args = {
    
}