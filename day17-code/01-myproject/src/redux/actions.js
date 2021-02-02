import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHECKTODOS,
  DELDONETODOS,
} from './constants'
export function addtodo(data) {
  return { type: ADDTODO, data }
}
export function updatetodo(data) {
  return { type: UPDATETODO, data }
}

export function deletetodo(data) {
  return { type: DELETETODO, data }
}
export function checktodos(data) {
  return { type: CHECKTODOS, data }
}
export function deldonetodos() {
  return { type: DELDONETODOS }
}
