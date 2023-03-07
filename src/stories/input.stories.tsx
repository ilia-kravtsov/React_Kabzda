import React, {ChangeEvent, useRef, useState} from 'react';
import {OnOff} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/input',
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {

  const [value,setValue] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return <><input value={value} onChange={onChange}/> - {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {

  const [value,setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef} /> <button onClick={save}>save</button> - actual value: {value}</>
}
export const ControlledInputWithFixedValue = () => <input value={'some'}/>

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2')

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setParentValue(e.currentTarget.value)
  }

  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
  </select>
}













































// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args