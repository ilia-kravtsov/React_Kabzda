import React, {FC} from "react";
import {Clock_Type} from "./Clock_versions";

const getNeedString = (number: number) => number < 10 ? '0' + number : number

export const DigitalClockView: FC<Clock_Type> = ({date}) => {
    return <>
        <span>{getNeedString(date.getHours())}</span>:
        <span>{getNeedString(date.getMinutes())}</span>:
        <span>{getNeedString(date.getSeconds())}</span>
    </>
}