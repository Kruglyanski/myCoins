
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCoinsList } from '../selectors/coins'
import { getPricesList } from '../selectors/prices'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCoins } from '../actions/coins'
import { getPrices } from '../actions/prices'

import Coin from '../components/Coin'

class CoinsList extends Component {
  componentDidMount() {
  this.props.getCoins();
  }
  render() {
    const {coins} = this.props
    return (
        <div className="main-wrapper" >
          <Coin coins={coins}/>
        </div>

    )
  };
}


const mapStateToProps = state => {
  return {
    coins: getCoinsList(state),
    prices: getPricesList(state)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCoins,
      getPrices
    },
    dispatch
  )

CoinsList.propTypes = {
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.instanceOf(Array),
  getPrices: PropTypes.func.isRequired,
  prices: PropTypes.instanceOf(Array)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsList)
