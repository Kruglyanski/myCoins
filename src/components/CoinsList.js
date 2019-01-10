import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCoinsList } from '../selectors/coins'
import { getPriceByCoin } from '../selectors/priceByCoin'
import { getPricesList } from '../selectors/prices'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCoins } from '../actions/coins'
import { getPrices  } from '../actions/prices'
import Coin from '../components/Coin'

class CoinsList extends Component {
  componentDidMount() {
    this.props.getCoins()

  }
  render() {
    const {coins, prices} = this.props
    return (
      <div className="main-wrapper" >
        <Coin coins={coins} prices ={prices}/>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
    const pricesSymbol = +props.USD

  return {
    coins: getCoinsList(state),
    prices: getPriceByCoin(pricesSymbol)(state),
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
  getPrices: PropTypes.func.isRequired,
  prices: PropTypes.instanceOf(Object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsList)
