import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default  {
    title: 'OnOff',
    component: OnOff
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff value={true} changeValues={callback} />;
export const OffMode = () => <OnOff value={false} changeValues={callback} />;

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)

    return (
        <OnOff value={value} changeValues={() => setValue(!value)}/>
    )
}

