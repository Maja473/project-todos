
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import DateTasks from './components/DateTasks'


import todos from './reducers/todos'


const reducer = combineReducers({
  todos: todos.reducer
})

const persistedStatesJSON = localStorage.getItem('todosReduxState')
let persistedState = {}
if (persistedStatesJSON) {
  persistedState = JSON.parse(persistedStatesJSON)
}


const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})


const Main = styled.section`
  background-image: url(./assets/blue-grid.png);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
	background-size: cover;
  background-position: center;
  display: flex;

`
const TaskContainer = styled.div`
  width: 80%;
  max-width: 350px;
  border: 4px solid black;
  box-shadow: 5px 5px 7px rgba(0,0,0,.25);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: white;
`
const TodoContainer = styled.div`
  width: 100%;
  overflow: scroll;
  max-height: 370px;`

export const App = () => {

  return (
   
    <Provider store={store}>
      <Main>
        <TaskContainer>
          <DateTasks />
          <TodoContainer>
            <AddTodo />
            <TodoList />

          </TodoContainer>

        </TaskContainer>
      </Main>


    </Provider>

  )
}
