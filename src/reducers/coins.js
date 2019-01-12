import { handleActions } from 'redux-actions'
import actions from '../actions/coins'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
  page: 0,
  totalItems: {},
  totalPages: 0,
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
      totalItems: payload.totalItems,
      totalPages: payload.totalPages,
    }),

    [actions.coins.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
    [actions.coins.page.success]: (state, { payload }) => ({
      ...state,
      page: payload.page,

    }),
  },
  initialState
)
