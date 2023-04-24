import React from "react";
import {Clock_versions} from "./Clock_versions";


export default {
    title: 'Clock_versions',
    component: Clock_versions,
}

export const BaseAnalogExample = () => {
    return <Clock_versions mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock_versions mode={'digital'}/>
}

