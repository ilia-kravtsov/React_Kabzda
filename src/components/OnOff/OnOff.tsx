import React, {useState} from 'react';
import style from "./OnOff.module.css";
import On from "./On";
import OFF from "./OFF";
import Lamp from "./Lamp";

type OnOffType = {
    value: boolean
    changeValues: () => void
}

const OnOff = (props: OnOffType) => {

    return (
        <span>
            <On name='ON' value={props.value} changeValues={props.changeValues}/>
            <OFF name='OFF' value={props.value} changeValues={props.changeValues}/>
            <Lamp value={props.value}/>
        </span>
    );
};

export default OnOff;