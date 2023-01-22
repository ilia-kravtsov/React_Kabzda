import React, {Dispatch, SetStateAction, useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {

    let [value_1, setValue_1] = useState(false)
    const changeStar_1 = () => {
        setValue_1(!value_1)
    }

    let [value_2, setValue_2] = useState(false)
    const changeStar_2 = () => {
        setValue_2(!value_2)
    }

    let [value_3, setValue_3] = useState(false)
    const changeStar_3 = () => {
        setValue_3(!value_3)
    }

    let [value_4, setValue_4] = useState(false)
    const changeStar_4 = () => {
        setValue_4(!value_4)
    }

    let [value_5, setValue_5] = useState(false)
    const changeStar_5 = () => {
        setValue_5(!value_5)
    }

    return (
        <div>
            <Star value={value_1}/><button onClick={changeStar_1}>1</button>
            <Star value={value_2}/><button onClick={changeStar_2}>2</button>
            <Star value={value_3}/><button onClick={changeStar_3}>3</button>
            <Star value={value_4}/><button onClick={changeStar_4}>4</button>
            <Star value={value_5}/><button onClick={changeStar_5}>5</button>
        </div>
    )

}

type StarPropsType = {
    value: boolean

}

function Star(props: StarPropsType) {


    if(props.value) {
        return (
            <span><b>star</b></span>

        )
    }

    else {
        return (
            <span>star</span>
        )
    }

}