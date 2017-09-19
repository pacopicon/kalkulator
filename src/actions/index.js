let nextLine = 0
export const parse = (text) => ({
  type: 'PARSE',
  id: nextLine++,
  text
})