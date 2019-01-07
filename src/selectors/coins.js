
import { createSelector } from 'reselect'

export const getData = ({ coins = {} }) => coins || {}

export const getCoinsList = createSelector(getData, data => data.items)
