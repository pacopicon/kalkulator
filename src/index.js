import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import './styles/main.css'

const store = createStore(reducer)

render(
		<Provider store={store}>
		    <App />
		  </Provider>,
		  document.getElementById('root')
	) 

export default class Root extends Component {

	componentDidMount() {
		var root = document.getElementById('root')
		root.innerHeight = window.innerHeight
	}

	componentDidUpdate() {
		var root = document.getElementById('root')
		root.innerHeight = window.innerHeight
	}

	
}

