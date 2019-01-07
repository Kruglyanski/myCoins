import 'babel-polyfill'
import { createActions } from 'redux-actions'
import mapper from '../mappers/coins'
import api from '../api/coins'

console.log(api);
const actions = createActions({
  coins: {
    request: x => x,
    success: x => x,
    error: x => x,

  },
})

export default actions


export const getCoins = () => async (dispatch, getState) => {

  const { coins } = getState()

  dispatch(actions.coins.request())

  try {
    const result = await api.apiGetCoins()

    console.log('Result.Data:', result.Data )
    const items = result.Data.map(mapper)

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
