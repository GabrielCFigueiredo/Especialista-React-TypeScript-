import React from 'react';
import { Story , Meta } from '@storybook/react'

import WordPriceCounter, { WordPriceCounterProps } from '../app/components/WordPriceCounter/WordPriceCounter';


export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
 
} as Meta;


const Template: Story<WordPriceCounterProps> = (args) => <WordPriceCounter {...args} />;

export const WordPriceCounterComponent = Template.bind({})

WordPriceCounterComponent.args = {
    pricePerCount: 0.25,
    wordsCount: 20
}