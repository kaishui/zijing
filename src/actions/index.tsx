
import * as types from '../constants/ActionType'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
export const toggleIsOn = (text: string, isOn: boolean) => ({ type: types.TOGGLE_IS_ON, text, isOn: !isOn})

export const submitText = async (parameters: any) => {
    const response = await fetch("https://www.tianqiapi.com/api/")
    console.log(response.status)
    const body = await response.json()
    console.log(body)
    return body
}