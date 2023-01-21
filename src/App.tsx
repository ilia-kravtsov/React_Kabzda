import React, {useState} from 'react';
import './App.module.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import On from "./components/OnOff/On";
import style from './App.module.css'
import OFF from "./components/OnOff/OFF";
import Lamp from "./components/OnOff/Lamp";
import OnOff from "./components/OnOff/OnOff";


/*
function expression
let someFunc = function(){}
*/
// function declaration
// arrow function
function App() {

    let [values, setValues] = useState(false)

    const changeValues = () => {
        setValues(prevState => !prevState)
    }

    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Accordion title={'HeaderForAccordion_1'} collapsed={true}/>
            <Accordion title={'HeaderForAccordion_2'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <h1>Homework from Dmitriy</h1>
            <OnOff changeValues={changeValues} value={values}/>
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

/*
    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody title={props.title}/>
            </div>
        )
    }

    Можно переписать на

    return (
            <div>
                <AccordionTitle title={props.title}/>
                { !props.collapsed && <AccordionBody title={props.title}/>}
            </div>
        )
*/


