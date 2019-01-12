import 'babel-polyfill'
import { createActions } from 'redux-actions'
import mapper from '../mappers/coins'
import api from '../api/coins'
import * as  _  from 'lodash'
import { getPrices } from '../actions/prices'

const actions = createActions({

  coins: {
    request: x => x,
    success: x => x,
    error: x => x,
    page: {
      success: x => x,
    },
  },

})

export default actions

export const getCoins = () => async (dispatch, getState) => {

  const { coins } = getState()

  dispatch(actions.coins.request())

  try {
    const result = await api.apiGetCoins()

    const totalPages = Math.ceil((JSON.stringify(result.Data).match(/ImageUrl/g).length)/20)

    const totalItems = result.Data
    console.log('totalItemsObjectCL', totalItems )
    const page = coins.page
    const items =_.map(totalItems, mapper)
    console.log('page', page)
    dispatch(
      actions.coins.success({
        items: [...coins.items, ...items],
        page,
        totalItems,
        totalPages,
      })
    )
    dispatch(getPrices())

  } catch (e) {
    dispatch(actions.coins.error({ error: e }))
    console.log(e)
  }
}

export const getPage =() => (dispatch, getState) => {
  const { coins } = getState()
  const page = coins.page
  dispatch(
    actions.coins.page.success({
      page: page,
    })
  )
}
