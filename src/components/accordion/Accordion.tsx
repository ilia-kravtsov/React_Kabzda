import React from "react";
import {RatingValueType} from "../Rating/Rating";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle
                    title={props.title}
                    onClick={props.onClick} collapsed={props.collapsed}/>
                {props.collapsed && <AccordionBody title={props.title}/>}
            </div>
        )

}
export default Accordion

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onClick}>{props.title}</h3>
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

/*
DZ from dimych way_1

import React from "react";
import {RatingValueType} from "../Rating/Rating";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
                {props.collapsed && <AccordionBody title={props.title}/>}
            </div>
        )

}
export default Accordion

type AccordionTitlePropsType = {
    title: string;
    onClick: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={() => {props.onClick(!props.collapsed)}}>{props.title}</h3>
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
*/


/*
DZ from dimych way_2
import React from "react";
import {RatingValueType} from "../Rating/Rating";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)} collapsed={props.collapsed}/>
                {props.collapsed && <AccordionBody title={props.title}/>}
            </div>
        )

}
export default Accordion

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
    collapsed: boolean
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
*/