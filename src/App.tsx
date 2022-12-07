import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

/*
function expression
let someFunc = function(){}
*/
// function declaration
// arrow function
function App() {
    // действия функции
    // возврат функией jsx разметки то что выглядит как html является jsx разметкой
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Accordion title={'HeaderForAccordion_1'}/>
            <Accordion title={'HeaderForAccordion_2'}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}




