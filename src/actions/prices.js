import 'babel-polyfill'
import { createActions } from 'redux-actions'
import apiPrices from '../api/prices'
import * as  _  from 'lodash'

const actionsPrices = createActions({
  prices: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
})

export default actionsPrices


export const getPrices = () => async (dispatch, getState) => {

  const {coins, prices} = getState()

  const requestPrices =(_.reduce(coins.items, function (array, item) {
    if ( !item.price ) {
      array.push(item.symbol)
    }
    return array
  }, [])).slice((coins.page * 20), (coins.page * 20 + 20)).join()

  console.log('requestPrices', requestPrices)

  dispatch(actionsPrices.prices.request())

  try {

    const items = await apiPrices.apiGetPrice(requestPrices)

    dispatch(
      actionsPrices.prices.success({
        items:  {...prices.items, ...items},
      }),
    )

  } catch (e) {
    dispatch(actionsPrices.prices.error({ error: e }))
    console.log(e)
  }
}

