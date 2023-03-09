import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default  {
    title: 'OnOff',
    component: OnOff
};

const callback = action('on or off clicked')
const OnOff_m = React.memo(OnOff)
export const OnMode = () => <OnOff_m value={true} changeValues={callback} />;
export const OffMode = () => <OnOff_m value={false} changeValues={callback} />;

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)

    return (
        <OnOff_m value={value} changeValues={() => setValue(!value)}/>
    )
}

