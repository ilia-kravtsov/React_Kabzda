import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';

export default  {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

const callback = action('rating changed inside component')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const Rating_1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const Rating_2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const Rating_3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const Rating_4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const Rating_5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;
