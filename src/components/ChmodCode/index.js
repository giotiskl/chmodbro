import React from 'react'
import PropTypes from 'prop-types'

const ChmodCode = ({code}) => {
  return (
    <div>
      {code}
    </div>
  )
}

ChmodCode.propTypes = {
  code: PropTypes.string,
}

export default ChmodCode