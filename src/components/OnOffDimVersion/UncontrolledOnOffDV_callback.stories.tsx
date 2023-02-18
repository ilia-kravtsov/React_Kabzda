import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledOnOffDV_callback_2 from './UncontrolledOnOffDV_callback_2';

export default  {
    title: 'UncontrolledOnOffDV_callback_2',
    component: UncontrolledOnOffDV_callback_2
};

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOffDV_callback_2 onClick={callback} on={true}/>;
export const OffMode = () => <UncontrolledOnOffDV_callback_2 onClick={callback} on={false}/>;

export const ModeChanging = () => {

    return (
        <UncontrolledOnOffDV_callback_2 onClick={callback} on={false}/>
    )
}

