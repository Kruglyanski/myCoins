// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/coins'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
  result: '',
  page: 0,
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
      page: payload.page,
    }),

    [actions.coins.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

  },
  initialState
)
