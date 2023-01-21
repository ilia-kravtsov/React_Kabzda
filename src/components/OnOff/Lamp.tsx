import React from 'react';
import style from "./OnOff.module.css";

type LampType = {
    value: boolean
}

const Lamp = (props: LampType) => {
    return (
        <div className={style.lampPosition}>
            {props.value && <div className={`${style.lamp} ${style.green}`}>{props.value}</div>}
            {!props.value && <div className={`${style.lamp} ${style.red}`}>{props.value}</div>}
        </div>
    );
};

export default Lamp;