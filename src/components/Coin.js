import React from 'react'
import PropTypes from 'prop-types'

const coin = ({coins}) => (
      coins.map(item => {
          return (
            <div  key={item.id}>
            </div>
          )
      })
  )



coin.propTypes = {
  cois: PropTypes.instanceOf(Array)

}

export default coin
