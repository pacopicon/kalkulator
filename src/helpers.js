import { eval as e } from 'mathjs'

export const qaString = (str) => {
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
     return "Forgot at least one ')'"
   } else if (openParArr.length < closeParArr.length) {
     return "Forgot at least one '('"
   } else {
     return (e(str)).toString()
   }
}

export const retrieve = () => {
	try {
		const serializedState = localStorage.getItem('expression');
		if (serializedState === null) {
			return "Nothing was retrieved";
		}
		return JSON.parse(serializedState)
	}	catch (err) {
		console.log('retrieve failed: ', err)
	}
}

export const store = (text) => {
	try {
		const serializedState = JSON.stringify(text)
		localStorage.setItem('expression', serializedState)
	} catch (err) {
		console.log('store failed: ', err)
	}
}
