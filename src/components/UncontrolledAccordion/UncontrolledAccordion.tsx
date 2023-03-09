import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    title: string;
}

export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export function UncontrolledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
            { !state.collapsed && <AccordionBody title={props.title}/>}
        </div>
    )

}
export default UncontrolledAccordion

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

function AccordionBody(props: any) {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}