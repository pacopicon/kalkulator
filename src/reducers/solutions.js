import { qaString } from '../helpers'

const solutions = (state = [], action) => {
  switch (action.type) {
    case 'PARSE':
      return [
        ...state,
        {
          id: action.id,
          text: qaString(action.text)        
        }
      ]
    default:
      return state
  }
}

export default solutions