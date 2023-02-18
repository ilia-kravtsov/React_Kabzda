import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOffDV} from './UncontrolledOnOffDV';

export default  {
    title: 'Uncontrolled/OnOffDV',
    component: UncontrolledOnOffDV
};

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOffDV defaultOn={true} onChange={callback} />;
export const OffMode = () => <UncontrolledOnOffDV defaultOff={false} onChange={callback} />;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>;
export const DefaultInputValue = () => <input defaultValue={'asdf'} />;
