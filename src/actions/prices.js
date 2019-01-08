import 'babel-polyfill'
import { createActions } from 'redux-actions'
import apiPrices from '../api/prices'
import * as  _  from 'lodash'

const actionsPrices = createActions({
  prices: {
    request: x => x,
    success: x => x,
    error: x => x,
  }
})

export default actionsPrices


export const getPrices = () => async (dispatch, getState) => {

  const { prices } = getState()


  dispatch(actionsPrices.prices.request())

  try {
    const result = await apiPrices.apiGetPrices()
    console.log(result)
    const items = _.map(result, (item) => item)
    console.log(items)
    dispatch(
      actionsPrices.coins.success({
        items: [...prices.items, ...items]

      })

    )
  } catch (e) {
    dispatch(actionsPrices.prices.error({ error: e }))
    console.log(e)
  }
}
