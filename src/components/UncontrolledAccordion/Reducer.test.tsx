import {reducer, StateType} from "./Reducer";
import {TOGGLE_COLLAPSED} from "./UncontrolledAccordion";

test('collapsed should be true', () => {
    //data
    const state: StateType = {collapsed: false}
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {collapsed: true}
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {collapsed: true}
    //action
    expect(() => {reducer(state, {type: 'FAKETYPE'})}).toThrowError()
    //expect

})

export {}