import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')



    return <>
        Hello, counter: {counter} fake: {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeout = () => {

    let [clock, setClock] = useState('')

    let date;
    let timeFormat;

    useEffect(() => {
        const id = setInterval(() => {

            date = new Date(Date.now())
            timeFormat = new Intl.DateTimeFormat("ru", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            });
            setClock(`${timeFormat.format(date)}`)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return <>{clock}</>
}

export const Clock = () => {

    let [clock, setClock] = useState('')

    let date;
    let timeFormat;

    useEffect(() => {

        setInterval(() => {

            date = new Date(Date.now())
            timeFormat = new Intl.DateTimeFormat("ru", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            });
            setClock(`${timeFormat.format(date)}`)
        }, 1000)
    }, [])

    return <>{clock}</>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('clean effect: ' + counter)
        }
    },[counter])

    const increase = () => setCounter(counter+1)

    return <>
        <button onClick={increase}>+</button>
        Hello: counter: {counter}
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered ' + text)

    useEffect(() => {
        console.log('useEffect')
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            console.log('clean')
            window.removeEventListener('keypress', handler)
        }
    },[text])

    return <>
        Typed text: {text}
    </>
}

export const SetIntervalExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered ' + text)

    useEffect(() => {
        console.log('useEffect')
        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            console.log('clean')
            clearInterval(timeoutId)
        }
    },[text])

    return <>
        Typed text: {text}
    </>
}



/*

setTimeout setInterval addEventListener websocket

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => { - выполнится либо когда компонента умрет либо когда useEffect снова сработает в нашем случае при изменении стейта
            console.log('clean effect')
        }
    },[counter])

Component rendered 2
clean effect: 1
Effect occurred: 2

Реакт каждый раз вызывает компоненту для того чтобы получить от нее новый JSX
JSX зависит от props и state

мы должны делать все асинхронные операции внутри useEffect

    // useEffect(() => {
    //     document.title = counter.toString()
    //     console.log('useEffect every render')
    // }, )
    // useEffect(() => {
    //     document.title = counter.toString()
    //     console.log('useEffect only first render (componentDidMount)')
    // }, [])
    // useEffect(() => {
    //     document.title = counter.toString()
    //     console.log('useEffect first render and every counter change')
    // }, [counter])
 */