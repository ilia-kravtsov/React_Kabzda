import React, {useState} from "react";

type AccordionPropsType = {
    title: string;

}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            { !collapsed && <AccordionBody title={props.title}/>}
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