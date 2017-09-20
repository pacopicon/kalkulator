import { eval as e } from 'mathjs'

const qaString = (str) => {
  var openParArr = []
  var closeParArr = []
  if (str.match(/[-+*/]$/g) || str.match(/^[-+*/]/g) || !str.match(/[0-9\(\)/*+-]/g)) {
      return `Cannot parse '${str}'`
    } 
  for (var i=0; i<str.length; i++) {
    var char = str.charAt(i)
    if (char.match(/\)/g)) {
      closeParArr.push(i)
    } else if (char.match(/\(/g)) {
      openParArr.push(i)
    }
  }
  if (openParArr.length > closeParArr.length) {
     return "Forgot at least one ')' "
   } else if (openParArr.length < closeParArr.length) {
     return "Forgot at least one '(' "
   } else {
     return (e(str)).toString()
   }
}

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