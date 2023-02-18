import {action} from '@storybook/addon-actions';
import UncontrolledAccordion from './UncontrolledAccordion';
import {useState} from "react";

export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callback = action('Accordion mode change event fired')

export const ModeChanging = () => {

    return (
        <UncontrolledAccordion title={'Menu'}/>
    )
}
