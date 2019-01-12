//  React
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Pagination } from 'semantic-ui-react'
// Components
import Coin from '../components/Coin'

// Selectors
import { getCoinsList } from '../selectors/coins'
import { getPrices } from '../selectors/prices'

// Actions
import { getCoins } from '../actions/coins'
import { getPage } from '../actions/coins'

class CoinsList extends Component {
  componentDidMount() {
    this.props.getCoins()
  }
    handlePageClick = (data) => {
      this.props.getPage(data)
        console.log('data', data.target)
        console.log('data', data.target.getAttribute('value'))
    }

    render() {
      const {coins, prices, isPricesFetching, page, totalItems, totalPages } = this.props
      console.log('page CoinsList', page)
      //const totalPages = ((JSON.stringify(totalItems).match(/ImageUrl/g)).length)/20 ???не работает здесь
      return (
        <div className="main-wrapper" >
          <Coin
            coins={coins.slice((page*20), (page*20+20))}
            prices={prices}
            isPricesFetching={isPricesFetching}
          />
          <div  className='paging'>
            <Pagination
              defaultActivePage={1}
              totalPages={totalPages}
              onPageChange={(data) =>this.handlePageClick(data)}
            />


          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {

  return {
    coins: getCoinsList(state),
    prices: getPrices(state),
    isPricesFetching: state.prices.isFetching,
    page: state.coins.page,
    totalItems: state.coins.totalItems,
    totalPages: state.coins.totalPages,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCoins,
      getPrices,
      getPage,
    },
    dispatch
  )

CoinsList.propTypes = {
  coins: PropTypes.instanceOf(Array),
  prices: PropTypes.instanceOf(Object),
  totalItems: PropTypes.instanceOf(Object),
  isPricesFetching: PropTypes.bool.isRequired,
  getCoins: PropTypes.func.isRequired,
  totalPages:PropTypes.number,
  page:PropTypes.number,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinsList)
