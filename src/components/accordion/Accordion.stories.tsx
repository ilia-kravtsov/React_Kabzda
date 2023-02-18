import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from "@storybook/react";

const GetCategory = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default  {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategory('Color')
        },
        onChange: {
            ...GetCategory('Event')
        },
        onClick: {
            ...GetCategory('Event')
        }
    }
};

const callback = action('Accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbacksProps = {
    collapsed: false,
    onClick: action('accordion collapsed')
}

export const UsersUnCollapsedMode_2 = Template.bind({})
UsersUnCollapsedMode_2.args = {
    ...callbacksProps,
    title: 'Menu',

}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    title: 'Users',
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {

    const [value, setValue] = useState<boolean>(true)

    return (
        <Accordion {...args} collapsed={value} onClick={() => {setValue(!value)}}/>
    )
}

ModeChanging.args = {
    title: 'Users'
}