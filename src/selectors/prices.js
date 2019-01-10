
import { createSelector } from 'reselect'

export const getPricesData = ({ prices = {} }) => prices || {}

export const getPrices = createSelector(getPricesData, data => data.items)
