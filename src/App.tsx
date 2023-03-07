import React, {useState} from 'react';
import style from './App.module.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import On from "./components/OnOff/On";
import OFF from "./components/OnOff/OFF";
import Lamp from "./components/OnOff/Lamp";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOffDV} from "./components/OnOffDimVersion/UncontrolledOnOffDV";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import OnOffDVTwo from "./components/OnOffDimVersion/UncontrolledOnOffDV_callback_2";

function App() {

    let [values, setValues] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const changeValues = () => {
        setValues(prevState => !prevState)
    }

    return (
        <div className={style.App}>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            {/*<Accordion title={'HeaderForAccordion_1'} collapsed={true}/>*/}
            {/*<Accordion title={'HeaderForAccordion_2'} collapsed={false}/>*/}
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <h1>Homework from Dmitriy</h1>
            <OnOff changeValues={changeValues} value={values}/>
            {/* <UncontrolledOnOffDV/>*/}
            <h2>Homework from Dmitriy</h2>
            {/*<UncontrolledAccordion title={'HeaderForAccordion_1'}/>*/}
            <UncontrolledRating onChange={() => {}} defaultValue={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'HeaderForAccordion_2'}
                       collapsed={accordionCollapsed} onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <OnOff changeValues={changeValues} value={values}/>
            {/* <UncontrolledOnOffDV/>*/}
            <OnOffDVTwo on={values} onClick={setValues}/>
            <UncontrolledOnOffDV onChange={setValues}/> {values.toString()}
            <UncontrolledAccordion title={'HeaderForAccordion_1'}/>
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

Локальный стейт компоненты
Компонента может возвращать jsx разметку которую в нее передают не только на основе
props который в нее приходят но еще и на основе своего локального состояния

    const on = false - локальный стейт
    Если будет менять значение переменной то перерисовки не произойдет
*/


