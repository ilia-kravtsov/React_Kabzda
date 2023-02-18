import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default  {
    title: 'Accordion',
    component: Accordion
};

const callback = action('Accordion mode change event fired')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onClick={action('accordion collapsed')}/>;
export const UsersUnCollapsedMode = () => <Accordion title={'Users'} collapsed={true} onClick={action('accordion collapsed')}/>;

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)

    return (
        <Accordion title={'Menu'} collapsed={value} onClick={() => {setValue(!value)}}/>
    )
}

