import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import TasksCompleted from 'components/TasksCompleted'
import DeleteAll from 'components/DeleteAll'

const TaskDateContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 10px 10px 0 0;
    font-weight: bold;

`
const TitleContainer = styled.div`
  display:flex;
  margin: 30px auto 20px auto;
  text-align: center;
  background: white;  
   
  `
const Title = styled.h1`
  font-family: 'Times New Roman';
  text-align: center;
  font-size: 50px;
  margin: 10px auto;`

const Date = styled.h2`
  font-size: 10px;  
  margin: 0;
  color:red;
`


const DateTasks = () => {
  
    return (
        <>
            <TaskDateContainer>
                <Date>{moment().format('ll')}</Date>
                <TasksCompleted />   
                <DeleteAll/>
            </TaskDateContainer>
            
            <TitleContainer>
                <Title>To-dos</Title>
            </TitleContainer>
        </>
    )
}
export default DateTasks