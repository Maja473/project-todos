import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const DeleteButton = styled.button`
border: none;
background-color: white;
border-radius: 5px;
font-weight: 600;
color: red;
padding: 5px 6px;
width: 80px;
display: flex;
justify-content: center;
font-size: 10px;
`
const ButtonContainer=styled.div`
display:flex;
justify-content: flex-end;
margin-top: 5px; `
const DeleteAll = () => {

const dispatch = useDispatch()

    const onDeleteClick =()=>{
        dispatch(todos.actions.onDelete())
    }
    return(
        <ButtonContainer>
            <DeleteButton onClick={onDeleteClick}>DELETE ALL</DeleteButton>
        </ButtonContainer>
        
    )
}

export default DeleteAll