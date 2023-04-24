import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 1;
}

export const Example_1 = () => {
    console.log('Example1')

    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    const onClickHandler = () => setCounter(state => ++state)

    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}
    </>
}

/*
Реакт каждый раз вызывает компоненту для того чтобы получить от нее новый JSX
JSX зависит от props и state
 */