import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockType = {
    mode?: 'analog' | 'digital'
}

export const Clock_versions = (props: ClockType) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalId = setInterval(() => {
            setDate(new Date())
           console.log('tick')
       }, 1000)

        return () => {
           clearInterval(intervalId)
        } // вызовется реактом когда компонента либо будет перерисовываться либо будет умирать то есть пропадет с экрана размонтируется
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <>{view}</>
}

export type Clock_Type = {
    date: Date
}

