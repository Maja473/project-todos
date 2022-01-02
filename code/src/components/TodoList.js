import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'


import todos from '../reducers/todos'


const TodoList = () => {
    const items = useSelector((store) => store.todos.items)
    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }
    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }
    const TodoItemText = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
   `
    const Todo = styled.p`
    font-size: 10px;
    margin:0;
    color: black`
   
    const Checkbox = styled.input`
    width: 20px;
    margin: 0 20px;
    background-color: red;
  `
    const Removebutton = styled.button`
    border: none;
    background-color: white;
    padding: 6px 6px;
    border-radius: 5px;
    font-weight: 700;
    color: black;
    width: 80px;
    margin-right: 10px;
   `
    const Date = styled.p`
    font-size: 15px;
    margin:0;
   `
    const Container = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    `

    return (
        <>
            <section>
                {items.map((item) => (
                    <Container key={item.id}>
                        <Checkbox type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
                        <TodoItemText>
                            <Todo>{item.text}</Todo>
                            <Date>Created: {item.postedTime}</Date>
                        </TodoItemText>
                        <Removebutton onClick={() => onDeleteTodo(item.id)}>Delete</Removebutton>
                    </Container>
                ))}
            </section>

        </>
    )

}


export default TodoList