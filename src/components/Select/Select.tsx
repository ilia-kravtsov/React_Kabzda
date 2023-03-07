import React, {Dispatch, SetStateAction, useState, KeyboardEvent, useEffect} from 'react'
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
    callback: Dispatch<SetStateAction<boolean>>
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElValue)

    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if ( props.items[i].value === hoveredElValue) {
                    const pretendent = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1];
                    if (pretendent) {
                        props.onChange(pretendent.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <>
            {/*<select name="" id="">*/}
            {/*    <option value="">Minsk</option>*/}
            {/*    <option value="">Moscow</option>*/}
            {/*    <option value="">Kiev</option>*/}
            {/*</select>*/}
            <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElValue(i.value)}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    )
}