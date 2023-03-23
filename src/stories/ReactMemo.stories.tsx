import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>{
        props.users.map( (u,i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example_1 = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['ilia', 'artem', 'anna', 'oleg', 'maksim', 'yana'])

    const onClickHandler = () => {
        setCounter(counter+1)
    }

    const AddUser = () => {
        const newUsers = [...users, `Sveta + ${new Date().getHours()}`]
        setUsers(newUsers)
    }

    users.push('Sveta ' + new Date().getFullYear())

    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={AddUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
