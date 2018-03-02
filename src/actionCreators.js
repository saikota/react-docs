import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actions.js'

export function addTodo(txt){
  return {
    type:ADD_TODO,
    txt:txt
  }
}
export function removeTodo(id){
  return {
    type:REMOVE_TODO,
    id:id
  }
}
export function toggleTodo(id){
  return {
    type:TOGGLE_TODO,
    id:id
  }
}
