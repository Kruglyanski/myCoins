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

  const {coins} = getState()
  const withoutPrices =(_.reduce(coins.items, function (array, item) {
    if ( !item.price ) {
      array.push(item.symbol)
    }
    return array
  }, [])).join()

  //console.log('withoutPrices:', withoutPrices)
  dispatch(actionsPrices.prices.request())

  try {
    const result = await apiPrices.apiGetPrice(withoutPrices)
    //console.log('result:',result)
    const items = _.map(result, (item) => item)
    //console.log('usditems:', items)

    dispatch(
      actionsPrices.prices.success({
      //Наверное можно было бы проще сделать
        items:  _.each(items, function (item, index) {
          coins.items[index].USD = item.USD
        }),
      })
    )
    //console.log('items:', coins.items)

  } catch (e) {
    dispatch(actionsPrices.prices.error({ error: e }))
    console.log(e)
  }
}
