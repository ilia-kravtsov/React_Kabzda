import React from 'react';
import style from './OnOff.module.css'

type OnOffType = {
    name: string
    value: boolean
    changeValues: () => void
}

const On = (props: OnOffType) => {

    const onClickHandlerTrue = () => {
        props.changeValues()
    }

    const onClickHandlerFalse = () => {
        props.changeValues()
    }

    return (
        <span>
            {props.value && <button onClick={onClickHandlerTrue} className={style.green}>{props.name}</button>}
            {!props.value && <button onClick={onClickHandlerFalse}>{props.name}</button>}
        </span>
    );
};

export default On;