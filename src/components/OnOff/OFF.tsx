import React from 'react';
import style from "./OnOff.module.css";

type OffType = {
    name: string,
    value: boolean
    changeValues: () => void
}

const Off = (props: OffType) => {

    const onClickHandlerTrue = () => {
        console.log('you pushed off, when props - true')
        props.changeValues()
    }
    const onClickHandlerFalse = () => {
        console.log('you pushed off, when props -  false')
        props.changeValues()
    }

    return (
        <span>
            {props.value && <button onClick={onClickHandlerTrue}>{props.name}</button>}
            {!props.value && <button onClick={onClickHandlerFalse} className={style.red}>{props.name}</button>}
        </span>
    );
};

export default Off;