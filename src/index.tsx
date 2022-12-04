import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

reportWebVitals();

/*
Основное отличие typescript от javascript в том что typescript следит еще и за соответствием типов данных

let a = 1;
a = 5; - yes
a = 'sting' - no - in typescript - yes - in javascript

let a = {name:victor}
a = {name:artem}

но при этом

let b; // по умолчанию тип any
the same let b: any;
b = 13;
b = 'string';
b = true; - так можно

но еще можно явно задать тип данных

let c: string;

c = 'aksdjl' - yes
c = 12 - no
c = true - no

можно так

let d: boolean = true
let d = true

указание типа данных массив чисел

let e = Array<number>;

Если хотим чтобы в массиве были и числа и строки

let f: Array<string | number>

f = [1] - yes
f = ['string'] - yes
f = [true] - no
*/

let users = [
    {
        name: 'victor',
        age: 10,
        address: {
            city: "Minsk",
            country: 'Belarus',
        }
    },
    {
        name: 'artem',
        age: 11,
        address: {
            city: "Moscow",
            country: 'Russia',
        }
    },
    {
        name: 'william',
        age: 12,
        address: {
            city: "Melbourne",
            country: 'Australia',
        }
    },
]

console.log(users[0].address.country) // Belarus