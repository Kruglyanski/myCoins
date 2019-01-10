//  React
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import Coin from '../components/Coin'

// Selectors
import { getCoinsList } from '../selectors/coins'
import { getPrices } from '../selectors/prices'

// Actions
import { getCoins } from '../actions/coins'

class CoinsList extends Component {
  componentDidMount() {
    this.props.getCoins()

  }
  render() {
    const {coins, prices} = this.props
    return (
      <div className="main-wrapper" >
        <Coin
          coins={coins}
          prices={prices}
        />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    coins: getCoinsList(state),
    prices: getPrices(state),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCoins,
      getPrices,
    },
    dispatch
  )

CoinsList.propTypes = {
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.instanceOf(Array),
  prices: PropTypes.instanceOf(Object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsList)
