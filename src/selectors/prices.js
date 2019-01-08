
import { createSelector } from 'reselect'

export const getPricesData = ({ prices = {} }) => prices || {}

export const getPricesList = createSelector(getPricesData, data => data.items)
