import React from 'react'
import Calculate from '../components/Calculate'
import Display from '../components/Display'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as parseAction from '../actions'

const App = ({ solutions, actions }) => (
  <div className="app">
    <Display solutions={solutions} />
    <Calculate parse={actions.parse} />
  </div>
)

const mapStateToProps = state => ({
	solutions: state.solutions
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(parseAction, dispatch)
})

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(App)