import { v4 } from 'uuid'

let nextLine = 0
export const parse = (text) => ({
  type: 'PARSE',
  id: v4(),
  text
})

// export const loadExp = (id) => ({
//   type: 'LOAD_EXP',
//   id: v4(),
//   text
// })

// export const saveExp = (text) => ({
//   type: 'SAVE_EXP',
//   id: v4(),
//   text
// })