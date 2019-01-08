import { handleActions }  from 'redux-actions'
import actionsPrices from '../actions/prices'

 const initialState = {
  isFetching: false,
  error: '',
  items: [],
}

export default handleActions(
  {
    [actionsPrices.prices.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actionsPrices.prices.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items
    }),

    [actionsPrices.prices.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

  },
  initialState
)
