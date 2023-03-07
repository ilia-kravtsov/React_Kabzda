import React, {Dispatch, SetStateAction, useState} from 'react'
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
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    return (
        <>
            <select name="" id="">
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
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