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
  font-family: 'Bodoni Moda', serif;
  font-size: 40px;
  text-align: center;
  margin: 10px auto;`

const Date = styled.h2`
  font-size: 12px;  
  font-weight: bold;
  margin: 0;
  color:black;
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
                <Title> Your To-dos</Title>
            </TitleContainer>
        </>
    )
}
export default DateTasks