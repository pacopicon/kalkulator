import { eval as e } from 'mathjs'

const solutions = (state = [], action) => {
  switch (action.type) {
    case 'PARSE':
      return [
        ...state,
        {
          id: action.id,
          text: (e(action.text)).toString()        
        }
      ]
    default:
      return state
  }
}

export default solutions