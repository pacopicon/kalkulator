import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Solution from './Solution'

export default class Display extends Component {
 
  componentWillUpdate() {
    var display = document.querySelector('.display')
    display.scrollTop = display.scrollHeight
  }

  componentDidUpdate() {
   var display = document.querySelector('.display')
    display.scrollTop = display.scrollHeight
  }

  render() {
    const { solutions } = this.props
    return (
      <div className="display" id="display">
        {solutions.map(solution =>
          <Solution
            key={solution.id}
            {...solution}
          />
        )}
      </div>
    )
  }

}

Display.propTypes = {
  solutions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}
