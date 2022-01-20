import React, { useState } from 'react';
import { Story , Meta } from '@storybook/react'

import TagInput, { TagInputProps } from '../app/components/TagInput/TagInput';
import { Tag } from 'react-tag-input';


export default {
  title: 'Example/TagInput',
  component: TagInput,
 
} as Meta;


const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const TagInputComponent = Template.bind({})

TagInputComponent.args = {
    tags: [{id:'1', text: 'javascript'}],
    placeholder: 'Insira as tag deste post'
}

export const VariusTag = Template.bind({})

VariusTag.args = {
  placeholder: 'Insira as tag deste post',
  tags: [
    {id:'1', text: 'javascript'},
    {id:'2', text: 'java'},
    {id:'3', text: 'react'},
    {id:'4', text: 'CSS3'},
    {id:'5', text: 'typescript'},
    {id:'6', text: 'react native'}
  ],
}

export function WorkingLiveExample() {

  const [tags, setTags] = useState<Tag[]>([])
  return <TagInput
  placeholder={'Insira as tag deste post'}
  tags={tags}
  onAdd={tag => setTags([...tags, tag])}
  onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}