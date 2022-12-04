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
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
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
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}