import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Tasktext = styled.p `
  font-size: 10px;
  padding: 0;
  margin:0;
  color: grey;
  `
 const Span = styled.span `
  color: #17D7A0;
  font-weight: bold;
 `
 
const TasksCompleted = () => {
    const amount = useSelector(store => store.todos.items.length)
    const completedAmount = useSelector(store => store.todos.items.filter(item => item.isComplete).length)

    return (
        <>
            <Tasktext> {amount} tasks</Tasktext>
            <Tasktext> <Span>{completedAmount}</Span> tasks completed</Tasktext> 
        </>
    )
    
}
export default TasksCompleted

