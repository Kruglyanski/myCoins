import 'babel-polyfill'
import { createActions } from 'redux-actions'
import mapper from '../mappers/coins'
import api from '../api/coins'
import * as  _  from 'lodash'

const actions = createActions({
  coins: {
    request: x => x,
    success: x => x,
    error: x => x,
  }
})

export default actions

export const getCoins = () => async (dispatch, getState) => {

  const { coins } = getState()

  dispatch(actions.coins.request())

  try {
    const result = await api.apiGetCoins()
    console.log('Result.Data:', result.Data )
    const items =_.map(result.Data, mapper).slice(0, 20)
    console.log(items)
    dispatch(
      actions.coins.success({
        items: [...coins.items, ...items]
      })
    )
  } catch (e) {
    dispatch(actions.coins.error({ error: e }))
    console.log(e)
  }
}
