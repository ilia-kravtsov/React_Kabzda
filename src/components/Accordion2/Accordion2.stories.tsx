import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion2, AccordionPropsType} from './Accordion2';
import {Story} from "@storybook/react";

export default  {
    title: 'Accordion',
    component: Accordion2,
};

const callback = action('Accordion mode change event fired')
const onCLickLi = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion2 title={'Menu'} collapsed={true} onClick={callback} items={[]} onClickLi={onCLickLi}/>
export const UserUnCollapsedMode = () => <Accordion2 title={'Menu'} collapsed={true} onClick={callback} items={[{title: 'ilia', value: 1},{title: 'artem', value: 2},{title: 'maksim', value: 3},{title: 'anna', value: 4},]} onClickLi={onCLickLi}/>

export const ModeChanging: Story<AccordionPropsType> = (args) => {

    const [value, setValue] = useState<boolean>(true)

    return <Accordion2 title={'Users'}
                       collapsed={value}
                       onClick={() => setValue(!value)}
                       items={[
                           {title: 'ilia', value: 1},
                           {title: 'artem', value: 2},
                           {title: 'maksim', value: 3},
                           {title: 'anna', value: 4},
                       ]}
                       onClickLi={(value) => alert(`user with ID ${value}`) }
    />

}
