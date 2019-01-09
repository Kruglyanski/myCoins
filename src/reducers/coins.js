import { handleActions } from 'redux-actions'
import actions from '../actions/coins'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
}

export default handleActions(
  {
    [actions.coins.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.coins.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
    }),

    [actions.coins.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState
)
