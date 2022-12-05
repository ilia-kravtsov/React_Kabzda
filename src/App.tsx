import React from 'react';
import './App.css';

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
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

export default App;

function AppTitle() {
    return <>This is App component</>
}


function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    return (
        <div>*</div>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return <h3>Меню</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}