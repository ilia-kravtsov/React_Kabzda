import React, {useState} from 'react';

type OnOffDVType = {

}

const OnOffDV = (props: OnOffDVType) => {

    let [on, setOn] = useState(false)
    console.log('OnOff')
    console.log('on: '+ on)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid lightgray',
        display: 'inline-block',
        padding: '5px 0px 0px 5px',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid lightgray',
        display: 'inline-block',
        padding: '5px 0px 0px 5px',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid lightgray',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOffDV;

/*  OnOffDV
    Создал компоненту, объявил тиипизацию
    Добавил три див для каждой кнопки и для лампочки

    Создаем инлайн стили для каждой кнопки внутри функции

    const OnOffDV = (props: OnOffDVType) => {

    const onStyle = {}
    const offStyle = {}
    const indicatorStyle = {}

    В ключе объекта нельзя писать дефис он превращается в camelCase (borderRadius)\

      const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid lightgray'
    }

    Присваиваем стиль дивке

    <div style={indicatorStyle}></div>


*/