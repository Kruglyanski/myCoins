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
  const withoutPrices =(_.reduce(coins.items, function (array, item) {
    if ( !item.price ) {
      array.push(item.symbol)
    }
    return array
  }, [])).join();
  dispatch(actionsPrices.prices.request())

  try {
    const items = await apiPrices.apiGetPrice(withoutPrices)


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

