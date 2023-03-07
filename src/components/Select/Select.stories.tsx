import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
};

export const SelectDZ = () => {

    return (
        <>
            <Select items={[
                {title: 'ilia', value: '1'},
                {title: 'artem', value: '2'},
                {title: 'maksim', value: '3'},
                {title: 'anna', value: '4'},]}
                    onChange={action('push me')}
                    value={4}
                    callback={action('push me')}
            />
        </>
    )
}

export const WithValue = () => {

    const [value, setValue] = useState<string>('1')

    return (
        <>
            <Select items={[
                {title: 'ilia', value: '1'},
                {title: 'artem', value: '2'},
                {title: 'maksim', value: '3'},
                {title: 'anna', value: '4'},]}
                    onChange={setValue}
                    value={value}
                    callback={action('push me')}
            />
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Select items={[
                {title: 'ilia', value: '1'},
                {title: 'artem', value: '2'},
                {title: 'maksim', value: '3'},
                {title: 'anna', value: '4'},]}
                    onChange={setValue}
                    callback={action('push me')}
                    value={value}
            />
        </>
    )
}

