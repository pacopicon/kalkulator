import React from 'react'
import PropTypes from 'prop-types'

const Solution = ({ text }) => (
  <div className="displayLine">
    <p>{text}</p>
  </div>
)

Solution.propTypes = {
  text: PropTypes.string.isRequired
}

export default Solution
